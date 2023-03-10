import Sidebar from "components/Sidebar"
import React, {useState} from "react";


const candidateRegister = () => {
  return (
    <>
        <div className="w-full min-h-screen text-gray-900 bg-gray-50 flex">
            <Sidebar />
            <div className="flex-1 pb-8 px-10 overflow-y-scroll">
                <div className="py-10">
                    <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Create your candidate</h1>
                </div>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Full name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name"/>
                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Date of birth
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Title"/>
                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Phone number
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Phone Number"/>
                        </div>
                        <div className="w-full px-3 grid grid-cols-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Group ID<input className="md:w-5/6 appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Group ID"/>
                            </label>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                User ID<input className="md:w-5/6 appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="User ID"/>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-10">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Gender
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="shadow bg-blue-400 md:w-1/3 py-2 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Create
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default candidateRegister