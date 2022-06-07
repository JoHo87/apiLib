import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Book from '../typeorm/entities/Book';
import BookRepository from '../typeorm/repositories/BooksRepository';

interface IRequest {
  name: string;
}

class ShowAvailableBookService {
  public async execute({ name }: IRequest): Promise<Book> {
    const booksRepository = getCustomRepository(BookRepository);
    name = name.replace('_', ' ');
    const book = await booksRepository.findAvailable(name);

    if (!book) {
      throw new AppError('Book not found!');
    }

    return book;
  }
}

export default ShowAvailableBookService;
