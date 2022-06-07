import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Book from '../typeorm/entities/Book';
import BookRepository from '../typeorm/repositories/BooksRepository';

interface IRequest {
  id: string;
  name: string;
  author: string;
  year: number;
  publisher: string;
  status: number;
  user_cpf: string;
}

class UpdateBookService {
  public async execute({
    id,
    name,
    author,
    year,
    publisher,
    user_cpf,
  }: IRequest): Promise<Book> {
    const booksRepository = getCustomRepository(BookRepository);

    const book = await booksRepository.findOne(id);

    if (!book) {
      throw new AppError('Book not found!');
    }

    book.name = name;
    book.author = author;
    book.year = year;
    book.publisher = publisher;
    book.user_cpf = user_cpf;

    await booksRepository.save(book);

    return book;
  }
}

export default UpdateBookService;
