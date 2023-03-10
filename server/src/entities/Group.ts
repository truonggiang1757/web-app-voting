import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()

export class Group extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    groupName!: string

    @Field()
    @Column()
    groupDescription!: string

    @Field(_type => User)
    @ManyToMany(() => User, user => user.groups)
    users: User[]

    @Field(_type => User)
    @ManyToOne(() => User, user => user.groups)
    groupAdmin: User

    @Field()
    @CreateDateColumn()
    createdAt!: Date

    @Field()
    @UpdateDateColumn()
    updatedAt!: Date

}