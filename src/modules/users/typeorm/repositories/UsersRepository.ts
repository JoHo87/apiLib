import { EntityRepository, getRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByname(name: string): Promise<User | undefined> {
    const user = await getRepository(User)
    .createQueryBuilder("user")
    .where("user.name LIKE :name", { name: `%${name}%` })
    .getOne();

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { id },
    });

    return user;
  }

  public async findByCpf(cpf: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { cpf },
    });

    return user;
  }
}

export default UserRepository;
