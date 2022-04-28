import { Test, TestingModule } from '@nestjs/testing'
import { testImports } from 'src/utils/tests'
import { UsersModule } from './users.module'
import { UsersResolver } from './users.resolver'

describe('UsersResolver', () => {
  let resolver: UsersResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...testImports(), UsersModule],
    }).compile()

    resolver = module.get<UsersResolver>(UsersResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
