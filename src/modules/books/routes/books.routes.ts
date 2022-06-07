import { Router } from 'express';
import BooksController from '../controllers/BooksController';
import { celebrate, Joi, Segments } from 'celebrate';

const booksRouter = Router();
const booksController = new BooksController();

booksRouter.get('/',
  booksController.index
);

booksRouter.get(
  '/id/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  booksController.show,
);

booksRouter.get(
  '/name/:name',
  celebrate({
    [Segments.PARAMS]: {
      name: Joi.string().required(),
    },
  }),
  booksController.showAvaible,
);

booksRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      author: Joi.string().required(),
      year: Joi.number().required(),
      publisher: Joi.string().required(),
      quantity: Joi.number().required(),
    },
  }),
  booksController.create,
);

booksRouter.put(
  '/id/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      author: Joi.string(),
      year: Joi.number(),
      publisher: Joi.string(),
      status: Joi.number().max(2).positive(),
      user_cpf: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  booksController.update,
);

booksRouter.put(
  '/status/:id',
  celebrate({
    [Segments.BODY]: {
      user_cpf: Joi.string(),
      status: Joi.number().max(2).required().min(0)
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  booksController.updateStatus,
);

booksRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  booksController.delete,
);

export default booksRouter;
