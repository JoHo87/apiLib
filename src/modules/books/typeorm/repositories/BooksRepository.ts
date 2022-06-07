import { EntityRepository, getRepository, Repository } from 'typeorm';
import Book from '../entities/Book';

@EntityRepository(Book)
class BookRepository extends Repository<Book> {
  public async findAvailable(name: string): Promise<Book | undefined> {
    const book = await getRepository(Book)
    .createQueryBuilder("book")
    .where("book.name LIKE :name", { name: `%${name}%` })
    .getOne();

    return book;
  }
}

export default BookRepository;
