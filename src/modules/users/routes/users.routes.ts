import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate'
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.index);

usersRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      password:Joi.string().required(),
      type: Joi.string().required(),
      birthday: Joi.date().required(),
      cpf: Joi.string().required(),
      address: Joi.string().required(),
    }
  }),
  usersController.create
)

export default usersRouter;
