/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, ObjectType } from '@nestjs/graphql'
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field((type) => ID)
  id!: string

  @Column({ length: '256', nullable: false })
  @Field({ nullable: false })
  familyName!: string

  @Column({ length: '256', nullable: false })
  @Field({ nullable: false })
  givenName!: string

  @Column({ length: '256', nullable: false })
  @Field({ nullable: false })
  familyNameFurigana!: string

  @Column({ length: '256', nullable: false })
  @Field({ nullable: false })
  givenNameFurigana!: string

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  @Field({ nullable: false })
  readonly createdAt!: Date

  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  @Field({ nullable: false })
  readonly updatedAt!: Date
}
