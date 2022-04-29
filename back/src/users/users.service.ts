import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Book } from 'src/books/book'
import { Repository } from 'typeorm'
import { User } from './user'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async books(id: string): Promise<Book[]> {
    const user = await this.usersRepository.findOne(id, {
      relations: ['books'],
    })
    if (user === undefined) {
      throw new NotFoundException(`User with id ${id} not found`)
    }
    return user.books
  }
}
