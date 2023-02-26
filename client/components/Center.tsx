import Image from 'next/image'
import logo_blue from '../assets/logo-blue.png'

const Center = () => {
    return (
        <main className="flex-1 pb-8">
            <div className="flex items-center justify-between py-7 px-10">
                <div>
                    <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Welcome</h1>
                    <p className="text-sm font-medium text-gray-500">to your user dashboard</p>
                </div>

                <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-blue-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                    <span className="text-sm font-semibold tracking-wide">Create vote</span>
                </button>
            </div>
            <div>
                <ul className="flex grid grid-cols-5 gap-x-24 items-center px-4 border-y border-gray-200">
                    <li>
                        <button className="flex items-center py-5 px-12 text-gray-500 relative group hover:text-blue-600">
                            <span className="font-medium">Popular</span>
                            <span className="absolute w-full h-0.5 bg-blue-600 rounded bottom-0 scale-x-0 group-hover-scale-x-100 transition-transform ease-in-out"></span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center py-5 px-12 text-gray-500 relative group hover:text-blue-600">
                            <span className="font-medium">All</span>
                            <span className="absolute w-full h-0.5 bg-blue-600 rounded bottom-0 scale-x-0 group-hover-scale-x-100 transition-transform ease-in-out"></span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center py-5 px-12 text-gray-500 relative group hover:text-blue-600">
                            <span className="font-medium">Rising</span>
                            <span className="absolute w-full h-0.5 bg-blue-600 rounded bottom-0 scale-x-0 group-hover-scale-x-100 transition-transform ease-in-out"></span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center py-5 px-12 text-gray-500 relative group hover:text-blue-600">
                            <span className="font-medium">Your ballots</span>
                            <span className="absolute w-full h-0.5 bg-blue-600 rounded bottom-0 scale-x-0 group-hover-scale-x-100 transition-transform ease-in-out"></span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center py-5 px-12 text-gray-500 relative group hover:text-blue-600">
                            <span className="font-medium">Your votes</span>
                            <span className="absolute w-full h-0.5 bg-blue-600 rounded bottom-0 scale-x-0 group-hover-scale-x-100 transition-transform ease-in-out"></span>
                        </button>
                    </li>
                </ul>
            </div>

        <table className="w-full border-b border-gray-200">
            <thead>
                <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                    <td className="pl-10">
                        <div className="flex items-center gap-x-4">
                            <span>Popular ongoing votes</span>
                        </div>
                    </td>
                    <td className="py-4 px-4 text-center">Open</td>
                    <td className="py-4 px-4 text-center">Close at</td>
                    <td className="py-4 px-4 text-center">Rating</td>
                    <td className="py-4 px-4 text-center">State</td>
                </tr>
            </thead>
                <tbody>
                <tr
                    className="hover:bg-gray-100 transition-colors group"
                >
                    <td className="flex gap-x-4 items-center py-4 pl-10">
                    <input
                        type="checkbox"
                        className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                    />
                    <Image
                        src={logo_blue}
                        alt=""
                        className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                    />
                    <div>
                        <a href="#" className="text-lg font-semibold text-gray-700">
                        Government
                        </a>
                        <div className="font-medium text-gray-400">Government Vote</div>
                    </div>
                    </td>
                    <td className="font-medium text-center">Feb 2nd 2023</td>
                    <td className="font-medium text-center">Mar 28th 2023</td>
                    <td className="text-center">
                    <span className="font-medium">4.5</span>
                    <span className="font-medium">/5</span>
                    </td>
                    <td>
                    <div className="flex gap-x-2 justify-center items-center">
                        <p>Public</p>
                    </div>
                    </td>
                </tr>
                <tr
                    className="hover:bg-gray-100 transition-colors group"
                >
                    <td className="flex gap-x-4 items-center py-4 pl-10">
                    <input
                        type="checkbox"
                        className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                    />
                    <Image
                        src={logo_blue}
                        alt=""
                        className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                    />
                    <div>
                        <a href="#" className="text-lg font-semibold text-gray-700">
                        Government
                        </a>
                        <div className="font-medium text-gray-400">Government Vote</div>
                    </div>
                    </td>
                    <td className="font-medium text-center">Feb 2nd 2023</td>
                    <td className="font-medium text-center">Mar 28th 2023</td>
                    <td className="text-center">
                    <span className="font-medium">4.5</span>
                    <span className="font-medium">/5</span>
                    </td>
                    <td>
                    <div className="flex gap-x-2 justify-center items-center">
                        <p>Public</p>
                    </div>
                    </td>
                </tr>
                <tr
                    className="hover:bg-gray-100 transition-colors group"
                >
                    <td className="flex gap-x-4 items-center py-4 pl-10">
                    <input
                        type="checkbox"
                        className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                    />
                    <Image
                        src={logo_blue}
                        alt=""
                        className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                    />
                    <div>
                        <a href="#" className="text-lg font-semibold text-gray-700">
                        Government
                        </a>
                        <div className="font-medium text-gray-400">Government Vote</div>
                    </div>
                    </td>
                    <td className="font-medium text-center">Feb 2nd 2023</td>
                    <td className="font-medium text-center">Mar 28th 2023</td>
                    <td className="text-center">
                    <span className="font-medium">4.5</span>
                    <span className="font-medium">/5</span>
                    </td>
                    <td>
                    <div className="flex gap-x-2 justify-center items-center">
                        <p>Public</p>
                    </div>
                    </td>
                </tr>
                <tr
                    className="hover:bg-gray-100 transition-colors group"
                >
                    <td className="flex gap-x-4 items-center py-4 pl-10">
                    <input
                        type="checkbox"
                        className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                    />
                    <Image
                        src={logo_blue}
                        alt=""
                        className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                    />
                    <div>
                        <a href="#" className="text-lg font-semibold text-gray-700">
                        Government
                        </a>
                        <div className="font-medium text-gray-400">Government Vote</div>
                    </div>
                    </td>
                    <td className="font-medium text-center">Feb 2nd 2023</td>
                    <td className="font-medium text-center">Mar 28th 2023</td>
                    <td className="text-center">
                    <span className="font-medium">4.5</span>
                    <span className="font-medium">/5</span>
                    </td>
                    <td>
                    <div className="flex gap-x-2 justify-center items-center">
                        <p>Public</p>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>

            <div className="flex gap-x-2 justify-center pt-8">
                <button className="flex justify-center items-center w-8 h-8">
                Prev
                </button>
                <button className='flex items-center justify-center w-8 h-8 font-medium rounded-full'>1</button>
                <button className='flex items-center justify-center w-8 h-8 font-medium rounded-full'>2</button>
                <button className='flex items-center justify-center w-8 h-8 font-medium rounded-full'>3</button>
                <button className='flex items-center justify-center w-8 h-8 font-medium rounded-full'>4</button>
                <button className='flex items-center justify-center w-8 h-8 font-medium rounded-full'>5</button>
                <button className="flex justify-center items-center w-8 h-8">
                Next
                </button>
            </div>
        </main>
    )
}

export default Center