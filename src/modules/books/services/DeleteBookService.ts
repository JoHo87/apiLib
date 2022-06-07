import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import BookRepository from '../typeorm/repositories/BooksRepository';

interface IRequest {
  id: string;
}

class DeleteBookService {
  public async execute({ id }: IRequest): Promise<void> {
    const booksRepository = getCustomRepository(BookRepository);

    const book = await booksRepository.findOne(id);

    if (!book) {
      throw new AppError('Book not found.');
    }

    if (book.status != 0) {
      throw new AppError('Book is not available.');
    }

    await booksRepository.remove(book);
  }
}

export default DeleteBookService;
