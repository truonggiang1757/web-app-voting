import { Arg, Ctx, ID, Mutation, Query, Resolver } from 'type-graphql'
import { Context } from '../types/Context'
import { COOKIE_NAME } from '../constants'
import { CreatePostInput } from '../types/CreatePostInput'
import { PostMutationResponse } from '../types/PostMutationResponse'
import { Post } from '../entities/Post'
import { UpdatePostInput } from '../types/UpdatePostInput'
import { AuthenticationError } from 'apollo-server-core'

@Resolver()
export class PostResolver {
    @Mutation(_return => PostMutationResponse)
    async createPost(@Arg('createPostInput'){title,text}: CreatePostInput
    ): Promise<PostMutationResponse> {
        try {
            const newPost = Post.create({
                title, 
                text
            })
    
            await newPost.save()

            return {
                code: 200,
                success: true,
                message: 'Post created.',
                post: newPost
            }
        } catch (error) {
            console.log(error)
            return {code: 500, success: false, message: `Internal server error ${error.message}`}
        }
    }

    @Query(_return => [Post], {nullable: true})
    async posts(): Promise<Post[] | null> {
        try {
            return await Post.find()
        } catch (error) {
            console.log(error)
            return null
        }
    } 

    @Query(_return => Post, {nullable: true})
    async post(@Arg('id', _type => ID) id: number): Promise<Post | null> {
        try {
            const post = await Post.findOne({where: {id:id}})
            return post
        } catch (error) {
            console.log(error)
            return null
        }
    }

    @Mutation(_return => PostMutationResponse)
    async updatePost(
        @Arg('updatePostInput') {id, title, text}: UpdatePostInput)
        : Promise<PostMutationResponse> {
            const existingPost = await Post.findOne({where: {id:id}})
            if(!existingPost)
            return {code: 400, success: false, message: 'Post not found'}
            existingPost.title = title
            existingPost.text = text

            await existingPost.save()

            return {code: 200, success: true, message: 'Post updated', post: existingPost}
    }
    
    @Mutation(_return => PostMutationResponse)
    async deletePost(
        @Arg('id', _type => ID) id:number,
        @Ctx() {req}: Context
    ): Promise<PostMutationResponse> {
        if(!req.session.userId) {
            throw new AuthenticationError('Not Authenticated to perform operation')
        }
        console.log('REQUEST.SESSION', req.session)
        const existingPost = await Post.findOne({where: {id: id}})
        if(!existingPost)
        return {
            code: 400, success: false, message: 'Post not found'
        }
        await Post.delete({id})
        return {code: 200, success: true, message: 'Post deleted'}
    }
}