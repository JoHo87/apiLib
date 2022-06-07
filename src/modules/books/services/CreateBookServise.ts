import { getCustomRepository } from 'typeorm';
import Book from '../typeorm/entities/Book';
import BookRepository from '../typeorm/repositories/BooksRepository';

interface IRequest {
  name: string;
  author: string;
  year: number;
  publisher: string;
  quantity: number;
}

interface outBook {
  name?: string;
  author?: string;
  year?: number;
  publisher?: string;
  ids: string[];
}

class CreateBookService {
  public async execute({
    name,
    author,
    year,
    publisher,
    quantity,
  }: IRequest): Promise<outBook> {
    let book;
    let ids = [];
    for (let i = 0; i < quantity; i++) {
      const booksRepository = getCustomRepository(BookRepository);
      book = booksRepository.create({
        name,
        author,
        year,
        publisher,
        status: 0,
      });
      await booksRepository.save(book);
      ids.push(book.id);
    }
    const outBook = {
      name: book?.name,
      author: book?.author,
      year: book?.year,
      publisher: book?.publisher,
      ids
    }

    return outBook;
  }
}

export default CreateBookService;
