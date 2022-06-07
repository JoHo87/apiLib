import { Request, Response } from 'express';
import CreateBookService from '../services/CreateBookServise';
import DeleteBookService from '../services/DeleteBookService';
import ListBookService from '../services/ListBookService';
import ShowBookService from '../services/ShowBookService';
import ShowAvailableBookService from '../services/ShowAvailableBookService';
import UpdateBookService from '../services/UpdateBookService';
import UpdateStatusBookService from '../services/UpdateStatusBookService';

export default class BooksController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBooks = new ListBookService();

    const books = await listBooks.execute();

    return response.json(books);
  }

  public async showAvaible(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;
    const showBook = new ShowAvailableBookService();

    const books = await showBook.execute({ name });

    return response.json(books);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showBook = new ShowBookService();

    const book = await showBook.execute({ id });

    return response.json(book);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, author, year, publisher, quantity } = request.body;

    const createBook = new CreateBookService();

    const book = await createBook.execute({
      name,
      author,
      year,
      publisher,
      quantity,
    });

    return response.json(book);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, author, year, publisher, status, user_cpf } = request.body;
    const { id } = request.params;

    const updateBook = new UpdateBookService();

    const book = await updateBook.execute({
      id,
      name,
      author,
      year,
      publisher,
      status,
      user_cpf,
    });

    return response.json(book);
  }

  public async updateStatus(request: Request, response: Response): Promise<Response> {
    const { user_cpf,status } = request.body;
    const { id } = request.params;

    const updateBook = new UpdateStatusBookService();

    const book = await updateBook.execute({
      id,
      user_cpf,
      status,
    });

    return response.json(book);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteBook = new DeleteBookService();

    await deleteBook.execute({ id });

    return response.json([]);
  }
}
