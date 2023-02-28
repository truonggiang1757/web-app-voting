import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Image from 'next/image'
import logo_white from '../assets/logo-white.png'
import NextLink from "next/link";
import Link from "next/link";

const Navbar = () => {
    let [open, setOpen]=useState(false);
    return(
        <div className="bg-blue-400 sticky top-0">
            <nav className="container mx-auto p-5 bg-blue-400 z-10 md:flex md:items-center md:justify-between text-white">
                <div className="flex justify-between items-center">
                    <span>
                        <a href="/"><Image src={logo_white} alt="Logo" className="w-[150px]"/></a>
                    </span>
                    <span onClick={() => setOpen(!open)} className="fill-white text-3xl cursor-pointer absolute md:hidden right-8 top-6 mx-2">
                        <Bars3Icon className="p-2 fill-white stroke-white w-10 h-10" name={open ? 'close' : 'menu'} />
                        

                    </span>
                </div>
                <ul className={`md:flex md:flex-row items-center md:pb-0 pb-12 bg-blue-400 z-10 md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 right-[-400px] ${open ? 'flex flex-col -z-1 top-20 opacity-100' : 'right-[-490px]'} md:opacity-100 opacity-0`}>
                    <li className="mx-4 my-6 md:my-0">
                        <Link href="/" className="text-xl">About us</Link>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <Link href="/register" className='text-xl border-2 border-white rounded-full px-5 py-2 font-semibold hover:bg-white hover:text-blue-400'>Register</Link>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <Link href="/login" className='text-xl border-2 border-white rounded-full px-5 py-2 font-semibold hover:bg-white hover:text-blue-400'>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
