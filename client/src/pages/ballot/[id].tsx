import { PostDocument, PostIdsDocument, PostIdsQuery, PostQuery, usePostIdsQuery, usePostQuery } from "@/generated/graphql"
import { addApolloState, initializeApollo } from "@/lib/apolloClient"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { limit } from ".."
import Sidebar from "components/Sidebar"
import Link from "next/link"

const Ballot = () => {
  const router = useRouter()
  const {data: dataPost, error} = usePostQuery({variables: {id: router.query.id as string}})
  if(error || !dataPost?.post) return (
    <div>
      {error? error.message : 'Ballot not found'}
    </div>
  )
  return (
    <div className='w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex'>
      <Sidebar/>
      <div className="flex justify-between py-7 px-10">
          <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">{dataPost.post.title}</h1>
              <p className="text-sm font-medium text-gray-500">{dataPost.post.text}</p>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const {data} = await apolloClient.query<PostIdsQuery>({query: PostIdsDocument, variables: {limit}})
  return {
    paths: data.posts!.paginatedPosts.map(post => ({
      params: {id: `${post.id}`}
    })),
    fallback: 'blocking'
  }
}
export const getStaticProps: GetStaticProps<{ [key:string]: any }, {id: string}> = async ({params}) => {
  const apolloClient = initializeApollo()
  await apolloClient.query<PostQuery>({query: PostDocument, variables: {id: params?.id}})

  return addApolloState(apolloClient, {props: {}})
}

export default Ballot