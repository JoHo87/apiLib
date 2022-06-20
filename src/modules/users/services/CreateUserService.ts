import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  password: string;
  type: string;
  birthday: string;
  cpf: string;
  address: string;
}


class CreateUserService {
  public async execute({
    name,
    password,
    type,
    birthday,
    cpf,
    address,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository)
    const cpfExists = await usersRepository.findByCpf(cpf);

    if (cpfExists) {
      throw new AppError('User CPF already used.');
    }

    if (type != 'client' && type != 'employee') {
      throw new AppError(`User type need to be 'client' or 'employee'.`);
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      password: hashedPassword,
      type,
      birthday,
      cpf,
      address,
      fine: 0,
      books_rented: 0,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
