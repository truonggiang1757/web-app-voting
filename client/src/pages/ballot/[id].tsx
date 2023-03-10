import { PostDocument, PostIdsDocument, PostIdsQuery, PostQuery, usePostIdsQuery, usePostQuery } from "@/generated/graphql"
import { addApolloState, initializeApollo } from "@/lib/apolloClient"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { limit } from ".."
import Sidebar from "components/Sidebar"
import Image from "next/image"

const Ballot = () => {
  const router = useRouter()
  const {data: dataPost, error} = usePostQuery({variables: {id: router.query.id as string}})
  if(error || !dataPost?.post) return (
    <div>
      {error? error.message : 'Ballot not found'}
    </div>
  )
  return (
    <div className='w-full min-h-screen text-gray-900 bg-gray-50 flex'>
      <Sidebar/>
      <div>
        <div className="flex justify-between py-7 px-10">
          <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">{dataPost.post.title}</h1>
              <p className="text-sm font-medium text-gray-500">{dataPost.post.text}</p>
          </div>
        </div>
        {/* CANDIDATES CONTAINER */}
        <div className="container px-10">
          <div className="grid grid-cols-4 gap-10">
            {/*  */}
              <div className="card rounded-sm overflow-hidden relative group gap-4">
                <Image src={"/untitled.png"} alt="bg" width={300} height={300} className="w-full transition-all transform"/>
                <div className="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20">
                  <h4 className="mb-2 text-sm opacity-80">Candidate #1</h4>
                  <h3 className="mb-8 text-2xl">Name of candidate</h3>
                  <a className="hover:bg-blue-300 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-blue" href="">Read more</a>
                </div>
                <div className="z-10 h-1/2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
                </div>
              </div>
            {/*  */}
            {/*  */}
            <div className="card rounded-sm overflow-hidden relative group gap-4">
                <Image src={"/untitled.png"} alt="bg" width={300} height={300} className="w-full transition-all transform"/>
                <div className="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20">
                  <h4 className="mb-2 text-sm opacity-80">Candidate #1</h4>
                  <h3 className="mb-8 text-2xl">Name of candidate</h3>
                  <a className="hover:bg-blue-300 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-blue" href="">Read more</a>
                </div>
                <div className="z-10 h-1/2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
                </div>
              </div>
            {/*  */}
            {/*  */}
            <div className="card rounded-sm overflow-hidden relative group gap-4">
                <Image src={"/untitled.png"} alt="bg" width={300} height={300} className="w-full transition-all transform"/>
                <div className="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20">
                  <h4 className="mb-2 text-sm opacity-80">Candidate #1</h4>
                  <h3 className="mb-8 text-2xl">Name of candidate</h3>
                  <a className="hover:bg-blue-300 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-blue" href="">Read more</a>
                </div>
                <div className="z-10 h-1/2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
                </div>
              </div>
            {/*  */}
            {/*  */}
            <div className="card rounded-sm overflow-hidden relative group gap-4">
                <Image src={"/untitled.png"} alt="bg" width={300} height={300} className="w-full transition-all transform"/>
                <div className="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20">
                  <h4 className="mb-2 text-sm opacity-80">Candidate #1</h4>
                  <h3 className="mb-8 text-2xl">Name of candidate</h3>
                  <a className="hover:bg-blue-300 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-blue" href="">Read more</a>
                </div>
                <div className="z-10 h-1/2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
                </div>
              </div>
            {/*  */}
            {/*  */}
            <div className="card rounded-sm overflow-hidden relative group gap-4">
                <Image src={"/untitled.png"} alt="bg" width={300} height={300} className="w-full transition-all transform"/>
                <div className="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20">
                  <h4 className="mb-2 text-sm opacity-80">Candidate #1</h4>
                  <h3 className="mb-8 text-2xl">Name of candidate</h3>
                  <a className="hover:bg-blue-500 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-blue" href="">Read more</a>
                </div>
                <div className="z-10 h-1/2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
                </div>
              </div>
            {/*  */}
            {/*  */}
            <div className="card rounded-sm overflow-hidden relative group gap-4">
                <Image src={"/untitled.png"} alt="bg" width={300} height={300} className="w-full transition-all transform"/>
                <div className="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20">
                  <h4 className="mb-2 text-sm opacity-80">Candidate #1</h4>
                  <h3 className="mb-8 text-2xl">Name of candidate</h3>
                  <a className="hover:bg-blue-300 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-blue" href="">Read more</a>
                </div>
                <div className="z-10 h-1/2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
                </div>
              </div>
            {/*  */}
          </div>
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