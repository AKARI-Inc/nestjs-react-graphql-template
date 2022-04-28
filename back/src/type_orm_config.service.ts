import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import TypeOrmNamingStrategy from './type_orm_naming_strategy'
import { typeOrmEntities } from './type_orm_entities'

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const configService = new ConfigService()
    return {
      type: 'postgres' as const,
      host: configService.get('DATABASE_HOST', 'db'),
      port: Number(configService.get('DATABASE_PORT', 5432)),
      username: configService.get('POSTGRES_USER', 'admin'),
      password: configService.get<string>('POSTGRES_PASSWORD', 'dev_sample'),
      database: configService.get<string>('POSTGRES_DB', 'main_db'),
      entities: typeOrmEntities,
      synchronize: false,
      namingStrategy: new TypeOrmNamingStrategy(),
    }
  }
}
