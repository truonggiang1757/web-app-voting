import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType() //TypeScript -> GraphQL
@Entity()// TypeScript -> PostgreSQL      

//Database table
export class User extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column({unique: true})
    username!: string

    @Field()
    @Column({unique: true})
    email!: string

    @Column()
    password!: string

    @Field()
    @CreateDateColumn()
    createdAt!: Date

    @Field()
    @UpdateDateColumn()
    updatedAt!: Date
}