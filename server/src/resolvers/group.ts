import { Group } from "../entities/Group";
import { Arg, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { GroupCreateInput } from "../types/GroupCreateInput";
import { Context } from '../types/Context'
import { GroupMutationResponse } from "src/types/GroupMutationResponse";

@Resolver(_of => Group)
export class GroupResolver {
    @Mutation(_return => Group)
    async createGroup(
        @Arg('groupCreateInput') {groupName, groupDescription}: GroupCreateInput,
    ): Promise<GroupMutationResponse> {
        try {
            const existingGroup = await Group.findOne({where: {groupName}})
            if(existingGroup){
                return {code: 400, success: false, message:`Group already exists`, errors: [{field:'Group', message:'Group already exists'}]}
            }
            const newGroup = Group.create({
                groupName,
                groupDescription,
            })
            await newGroup.save()

            return {
                code: 200, success: true, message:"Group createdd successfully", group: newGroup
            }
        }
        catch (error) {
            console.log(error)
            return {code: 500, success: false, message: `Internal server error ${error.message}`}
        }
    }
}