import { InputType, Field } from 'type-graphql'

@InputType()
export class GroupCreateInput {
    @Field()
    groupName: string

    @Field()
    groupDescription: string

}