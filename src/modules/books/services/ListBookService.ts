import { getCustomRepository } from 'typeorm';
import Book from '../typeorm/entities/Book';
import BookRepository from '../typeorm/repositories/BooksRepository';

class ListBookService {
  public async execute(): Promise<Book[]> {
    const booksRepository = getCustomRepository(BookRepository);

    const books = await booksRepository.find();

    return books;
  }
}

export default ListBookService;
