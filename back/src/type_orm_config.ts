import TypeOrmNamingStrategy from './type_orm_naming_strategy'
import 'dotenv/config'
import { typeOrmEntities } from './type_orm_entities'

export default {
  type: 'postgres' as const,
  host: process.env.DATABASE_HOST || 'db',
  port: Number(process.env.DATABASE_PORT || 5432),
  username: process.env.POSTGRES_USER || 'admin',
  password: process.env.POSTGRES_PASSWORD || 'dev_sample',
  database: process.env.POSTGRES_DB || 'main_db',
  entities: typeOrmEntities,
  migrations: ['./src/migrations/*.ts'],
  cli: {
    migrationsDir: './src/migrations',
  },
  synchronize: false,
  namingStrategy: new TypeOrmNamingStrategy(),
}
