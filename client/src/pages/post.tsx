import InputField from "components/InputField"
import Sidebar from "components/Sidebar"
import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";


const post = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
  return (
    <>
        <div className="w-full min-h-screen text-gray-900 bg-gray-50 flex">
            <Sidebar />
            <div className="flex-1 pb-8 px-10 overflow-y-scroll">
                <div className="py-10">
                    <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Create your ballot</h1>
                </div>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Group ID
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Group ID"/>
                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Title
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Title"/>
                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Description
                            </label>
                            <textarea rows="8" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Type your description here..."/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Number of elected individuals
                            </label>
                            <input className="md:w-1/4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="1"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Vote type
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>Plurality</option>
                                    <option>Majority</option>
                                    <option>Single Transferable Vote</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Time duration
                        </label>
                        <Datepicker
                            primaryColor={"blue"} 
                            value={value}
                            onChange={handleValueChange}
                        />
                    </div>           
                    <button className="shadow bg-blue-400 md:w-1/4 py-2 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Next
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default post