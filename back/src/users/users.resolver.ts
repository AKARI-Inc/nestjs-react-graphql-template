/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query, Resolver } from '@nestjs/graphql'
import { User } from './user'
import { UsersService } from './users.service'

@Resolver()
export class UsersResolver {
  constructor(private service: UsersService) {}

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.service.findAll()
  }
}
