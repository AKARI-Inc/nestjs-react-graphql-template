/* eslint-disable @typescript-eslint/no-unused-vars */
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Book } from 'src/books/book'
import { User } from './user'
import { UsersService } from './users.service'

@Resolver((of: unknown) => User)
export class UsersResolver {
  constructor(private service: UsersService) {}

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.service.findAll()
  }

  @ResolveField('books')
  books(@Parent() user: User): Promise<Book[]> {
    return this.service.books(user.id)
  }
}
