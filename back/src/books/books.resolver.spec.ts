import { Test, TestingModule } from '@nestjs/testing'
import { testImports } from 'src/utils/tests'
import { BooksModule } from './books.module'
import { BooksResolver } from './books.resolver'

describe('BooksResolver', () => {
  let resolver: BooksResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...testImports(), BooksModule],
    }).compile()

    resolver = module.get<BooksResolver>(BooksResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
