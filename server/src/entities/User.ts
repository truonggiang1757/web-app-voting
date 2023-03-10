import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";
import { ObjectType, Field, ID } from 'type-graphql'
import { Post } from "./Post";
import { Group } from "./Group";

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

    @ManyToMany(() => Group, group => group.users)
    groups: Group[]

    @Field()
    @CreateDateColumn()
    createdAt!: Date

    @Field()
    @UpdateDateColumn()
    updatedAt!: Date
}