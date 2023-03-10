import Sidebar from "components/Sidebar"
import Image from "next/image"

const voting = () => {
  return (
    <div className='w-full min-h-screen text-gray-900 bg-gray-50 flex'>
      <Sidebar/>
      <div>
        <div className="flex justify-between py-7 px-10">
            <div>
                {/* <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">{dataPost.post.title}</h1>
                <p className="text-sm font-medium text-gray-500">{dataPost.post.text}</p> */}
                <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">TESTING VOTE</h1>
                <p className="text-sm font-medium text-gray-500">DESCRIPTION</p>
            </div>
            </div>
            {/* CANDIDATES CONTAINER */}
            <div className="container px-10">
            <div className="grid grid-cols-4 gap-10">
                {/* */}
                <div className="card rounded-sm overflow-hidden relative group gap-4">
                    <Image src={"/untitled.png"} alt="bg" width={300} height={300} className="w-full transition-all transform"/>
                    <div className="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20">
                    <h4 className="mb-2 text-sm opacity-80">Candidate #1</h4>
                    <h3 className="mb-10 text-2xl">Name of candidate</h3>
                    <a className="hover:bg-blue-500 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-blue-400" href="">Read more</a>
                    </div>
                    <div className="z-10 h-1/2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
                    </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="card rounded-sm overflow-hidden relative group gap-4">
                    <Image src={"/untitled.png"} alt="bg" width={300} height={300} className="w-full transition-all transform"/>
                    <div className="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20">
                        <h4 className="mb-2 text-sm opacity-80">Candidate #2</h4>
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
                        <h4 className="mb-2 text-sm opacity-80">Candidate #3</h4>
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
                        <h4 className="mb-2 text-sm opacity-80">Candidate #4</h4>
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
                        <h4 className="mb-2 text-sm opacity-80">Candidate #5</h4>
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
                        <h4 className="mb-2 text-sm opacity-80">Candidate #6</h4>
                        <h3 className="mb-8 text-2xl">Name of candidate</h3>
                        <a className="hover:bg-blue-500 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-blue" href="">Read more</a>
                    </div>
                    <div className="z-10 h-1/2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
                    </div>
                </div>
                {/*  */}
            </div>
            <div className="mt-20 bg-blue-400 h-[1.5px] lg:w-full translate-y-1"></div>
            <div>
                <h1 className="mt-10 text-2xl font-semibold leading-relaxed text-gray-800">Voting Section</h1>
            </div>
            <form className="mt-10 grid grid-cols-2" action="" method="post">
                <div className="flex items-center">
                    <input type="checkbox" value="" className="px-3 py-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                    <label className="w-full py-3 ml-2 text-xl font-medium">Candidate #1</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" value="" className="px-3 py-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                    <label className="w-full py-3 ml-2 text-xl font-medium">Candidate #2</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" value="" className="px-3 py-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                    <label className="w-full py-3 ml-2 text-xl font-medium">Candidate #3</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" value="" className="px-3 py-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                    <label className="w-full py-3 ml-2 text-xl font-medium">Candidate #4</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" value="" className="px-3 py-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                    <label className="w-full py-3 ml-2 text-xl font-medium">Candidate #5</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" value="" className="px-3 py-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                    <label className="w-full py-3 ml-2 text-xl font-medium">Candidate #6</label>
                </div>
                <input type="submit" value="Submit" className='w-32 border-2 mt-6 border-blue-400 text-blue-400 rounded-full py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white'/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default voting