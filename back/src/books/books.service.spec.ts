import { Test, TestingModule } from '@nestjs/testing'
import { testImports } from 'src/utils/tests'
import { BooksModule } from './books.module'
import { BooksService } from './books.service'

describe('BooksService', () => {
  let service: BooksService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...testImports(), BooksModule],
    }).compile()

    service = module.get<BooksService>(BooksService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
