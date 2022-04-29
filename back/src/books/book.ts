/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { User } from 'src/users/user'
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

@Entity({ name: 'books' })
@ObjectType()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  @Field((type) => ID)
  id!: string

  @Column({ length: '256', nullable: false })
  @Field({ nullable: false })
  title!: string

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  @Field({ nullable: false })
  readonly createdAt!: Date

  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  @Field({ nullable: false })
  readonly updatedAt!: Date

  @Column({ nullable: false })
  @Field((type) => ID)
  readonly userId!: number

  @ManyToOne((type) => User, (user) => user.books, {
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  @Field((type) => User, { nullable: false })
  user!: User
}
