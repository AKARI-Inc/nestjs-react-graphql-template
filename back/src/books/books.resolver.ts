/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query, Resolver } from '@nestjs/graphql'
import { Book } from './book'
import { BooksService } from './books.service'

@Resolver()
export class BooksResolver {
  constructor(private service: BooksService) {}

  @Query((returns) => [Book])
  books() {
    return this.service.findAll()
  }
}
