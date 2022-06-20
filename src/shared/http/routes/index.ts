import { Router } from 'express';
import booksRouter from '@modules/books/routes/books.routes';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/books', booksRouter);
routes.use('/users', usersRouter);

export default routes;
