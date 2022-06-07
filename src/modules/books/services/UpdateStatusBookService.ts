import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Book from '../typeorm/entities/Book';
import BookRepository from '../typeorm/repositories/BooksRepository';

interface IRequest {
  id: string;
  status: number;
  user_cpf?: string;
}

class UpdateStatusBookService {
  public async execute({
    id,
    status,
    user_cpf
  }: IRequest): Promise<Book> {
    const booksRepository = getCustomRepository(BookRepository);

    const book = await booksRepository.findOne(id);

    if (!book) {
      throw new AppError('Book not found!');
    }

    if (book.status === status){
      throw new AppError('Book is at this status already!');
    }

    if (status != 0) {
      if (!user_cpf) {
        throw new AppError('It is necessary the user cpf!');
      }
      if (book.status === 2 && status == 1) {
        throw new AppError('The book cannot be reserved while it is rented!');
      }else {
        book.status = status;
        book.user_cpf = user_cpf as string;
      }

    } else {
      book.status = status;
      book.user_cpf = null;
    }

    await booksRepository.save(book);

    return book;
  }
}

export default UpdateStatusBookService;
