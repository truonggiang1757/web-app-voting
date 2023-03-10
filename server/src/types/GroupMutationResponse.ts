import { Group } from "../entities/Group";
import { ObjectType, Field } from "type-graphql";
import { FieldError } from "./FieldError";
import { IMutationResponse } from "./MutationResponse";

@ObjectType({implements: IMutationResponse})
export class GroupMutationResponse implements IMutationResponse {
    code: number
    success: boolean
    message?: string

    @Field({nullable: true})
    group?: Group

    @Field(_type => [FieldError], {nullable: true})
    errors?: FieldError[]
}