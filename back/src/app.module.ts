import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { HttpStatus, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLError } from 'graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmConfigService } from './type_orm_config.service'
import { checkProperty } from './utils'
import { UsersModule } from './users/users.module'
@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      cors: {
        host: process.env.NEST_HOST,
        credentials: true,
      },
      driver: ApolloDriver,
      autoSchemaFile: `${__dirname}/../../gql-schema/schema.gql`,
      formatError: (error) => {
        console.log(JSON.stringify(error))
        const code =
          checkProperty(error.extensions.exception, 'status') ||
          checkProperty(error.extensions.response, 'statusCode') ||
          HttpStatus.INTERNAL_SERVER_ERROR
        const formatted = new GraphQLError(error.message, {
          ...error,
          extensions: {
            code,
            name:
              (checkProperty(error.extensions.exception, 'name') as
                | string
                | undefined) || error.name,
          },
        })
        return formatted
      },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
