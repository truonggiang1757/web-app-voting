import Navbar from "../../components/Navbar"
import Button from "../../components/Button"
import Footer from "../../components/Footer"
import Image from 'next/image'
import { PostsDocument, useLogoutMutation, useMeQuery, usePostsQuery } from "@/generated/graphql"
import Head from 'next/head'
import Sidebar from 'components/Sidebar'
import Center from 'components/Center'
import Dashboard from 'components/Dashboard'
import { addApolloState, initializeApollo } from "@/lib/apolloClient"
import { GetStaticProps } from "next"

export const limit = 3
// import logo_blue from '../assets/logo-blue.png'


const Home = () => {
    const {data, loading: useMeQueryLoading} = useMeQuery()
    const [logout, {loading: useLogoutMutationLoading}] = useLogoutMutation()
    let body
    if(useMeQueryLoading) {
        body = null
    }
    else if(!data?.me) {
        body = (
            <>
                <div className="bg-white">
                    <Navbar />
                    <div className="container mx-auto lg:bg-[url('../assets/1.png')] md:bg-[url('../assets/1.png')] sm:bg-blue lg:w-[1600px] lg:h-[850px] md:w-[960px] md:h-[480px] bg-cover bg-center flex items-center">
                        <div className="container mx-auto px-4">
                            <div className="lg:max-w-[550px] md:max-w-[450px] sm:max-w-[350px] max-h-[200px] text-white flex flex-col gap-[40px]">
                                <div className="lg:-mt-[100px] lg:-mt-[100px]">
                                    <h4 className="lg:text-2xl md:text-2xl sm:text-2xl xs:text-2xl text-blue-400">Simply reliable.</h4>
                                    <h1 className="lg:text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-semibold text-blue-500">A Cardano-based voting system made for everyone</h1>
                                </div>
                                <div>
                                    <Button link = "#" text = "Get started" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto flex flex-col py-10 px-4 items-center">
                        <div className="flex items-center gap-5 justify-between">
                            <div className="bg-blue-400 h-[1px] lg:w-[600px] md:w-[200px] sm:w-[100px] xs:w-[50px] translate-y-1 mb-[40px]"></div>
                            <h1 className="text-2xl w-32 font-semibold text-blue-500 mt-3 mx-3 mb-[50px]">Why iVote?</h1>
                            <div className="bg-blue-400 h-[1px] lg:w-[600px] md:w-[200px] sm:w-[100px] xs:w-[50px] translate-y-1 mb-[40px]"></div>
                        </div>
                        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:divide-x-2 lg:divide-y-0 md:divide-y-2 sm:divide-y-2 xs:divide-y-2 divide-blue-300 gap-4 flex flex-col">
                            <div className="flex flex-col lg:w-[500px] md:w-[500px] sm:w-[500px] xs:w-[200px] text-justify">
                                <p className="lg:pr-[100px] md:mt-3 sm:mt-3 text-xl text-blue-500 font-light">We are an innovative team of programmers dedicated to developing a highly-secure and trustworthy applications using the latest blockchain technology.</p>
                            </div>
                            <div className="flex flex-col lg:w-[500px] md:w-[500px] sm:w-[200px] xs:w-[200px] text-justify">
                                <p className="lg:pl-[100px] md:mt-3 sm:mt-3 text-xl text-blue-500 font-light">iVote runs on Cardano, a public blockchain platform. Cardano is founded based on researches and developed with the most pioneering technology for the best security and sustainability.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto p-5 bg-blue-100 h-[450px] mt-[50px] rounded md:flex md:items-center text-white grid grid-cols-2 ">
                        <div className="w-2/6 pl-[200px]">
                            <h1 className="lg:text-3xl md:text-6xl sm:text-4xl xs:text-4xl font-semibold text-blue-500">COMMUNITY</h1>
                            <h4 className="lg:text-xl md:text-2xl sm:text-2xl xs:text-2xl text-blue-400 mt-[20px]">Join our Discord and Telegram today for the latest updates and to find answers to all your problems. </h4>
                            <div>
                                <Button link = "#" text = "Join our community" />
                            </div>
                        </div>
                        <div className="w-3/6 pl-[400px]">
                            {/* <Image src={logo_blue} alt="Logo"/> */}
                        </div>
                    </div>

                    <div className="container mx-auto p-5 bg-white h-[450px] mt-[50px] rounded md:flex md:items-center text-white grid grid-cols-2 "></div>
                    
                    <Footer />
                </div>
            </>
        )
    }
    else {
        body = (
            <>
                <div className='bg-gray-100 h-screen overflow-hidden'>
                    <Head>
                        <title>dApp</title>
                        <meta name="description" content="Generated by create next app" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div className='w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex'>
                        <Sidebar /> 
                        <Center />
                        {/* <Dashboard /> */}


                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            {body}
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const apolloClient = initializeApollo()

  await apolloClient.query({
    query: PostsDocument,
    variables: {
        limit: 4
    }
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}

export default Home
