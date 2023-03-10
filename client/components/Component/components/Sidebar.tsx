import { MeDocument, MeQuery, useLogoutMutation } from '@/generated/graphql'
import { UserCircleIcon, DocumentIcon, Cog8ToothIcon, HomeIcon, WalletIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import logo_blue from '../assets/logo-blue.png'

const Sidebar = () => {
    const [logout, {loading: useLogoutMutationLoading}] = useLogoutMutation()
    const logoutUser = async() => {
        await logout({
            update(cache, {data}) {
            if(data?.logout) {
                cache.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {me: null}
                 })
                }
            }
        })
        
    }
    const { reload } = useRouter()
    return (
        <aside className="py-6 px-10 w-64 border-r border-gray-200 text-xl">
            <div className="space-y-6">
                <div className='py-4'>
                    <a href="/"><Image src={logo_blue} alt="Logo"/></a>
                </div>
                <button className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <HomeIcon className='h-5 w-5' />
                    <span>Home</span>
                </button>
                <button className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <UserCircleIcon className='h-5 w-5' />
                    <span>Profile</span>
                </button>
                <button className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <WalletIcon className='h-5 w-5' />
                    <span>Wallet</span>
                </button>
                <button className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <DocumentIcon className='h-5 w-5' />
                    <span>Your votes</span>
                </button>
                <button className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <Cog8ToothIcon className='h-5 w-5' />
                    <span>Settings</span>
                </button>
                <button onClick={logoutUser} className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <ArrowLeftOnRectangleIcon className='h-5 w-5' />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar