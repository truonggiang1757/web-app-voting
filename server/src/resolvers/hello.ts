import { Context } from 'src/types/Context'
import { Resolver } from 'type-graphql'
import { Ctx, Query } from 'type-graphql/dist/decorators'

@Resolver()
export class HelloResolver {
    @Query(_return => String)
    hello(
        @Ctx() { req }: Context
    ) {
        console.log(req.session.userId)
        return 'hello world'
    }
}