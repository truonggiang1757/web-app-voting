import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from 'type-graphql'
import { Post } from "./Post";

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

    @Field()
    @Column()
    firstName!: string

    @Field()
    @Column()
    lastName!: string

    @Field()
    @Column()
    phoneNum!: string

    @Field()
    @Column()
    role!: string

    @Column()
    password!: string

    @OneToMany(() => Post, post => post.user)
    posts: Post[]

    @Field()
    @CreateDateColumn()
    createdAt!: Date

    @Field()
    @UpdateDateColumn()
    updatedAt!: Date
}