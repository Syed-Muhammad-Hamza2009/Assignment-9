"use client"
import { useState } from 'react';
import { Agbalumo } from "next/font/google"
import Link from "next/link"

const agbalumo = Agbalumo({
    subsets: ['latin'],
    weight: '400'
})


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="h-[144px] w-screen flex justify-center items-center">
            <div className="h-[100px] w-full relative md:w-[80%] md:rounded-3xl bg-[#1b2232] text-white flex justify-between items-center px-10">
                {/* Logo and Links */}
                <div className="flex justify-center items-center gap-10">
                <Link href={"/"}>
                    <h1 className={`${agbalumo.className} text-4xl`}>TECHZY</h1>
                </Link>
                    
                    <div className="hidden lg:flex gap-10">
                        <Link href={"/about"} className="text-lg mt-2">About Techzy</Link>
                        <Link href={"/learnTech"} className="text-lg mt-2">Learn Tech</Link>
                        <Link href={"/blog"} className="text-lg mt-2">Blog</Link>
                    </div>
                </div>

                {/* Navbar Buttons */}
                <div className="hidden md:flex gap-10">
                    <Link href={"/login"} className="text-lg mt-4">Login</Link>
                    <Link href={"/signup"} className="text-lg mt-2 h-12 bg-PrimaryPurple flex justify-center items-center w-52 rounded-xl">Become a Techie</Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden flex items-center gap-4">
                    {/* <h1 className="font-bold text-4xl">Techie</h1> */}
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        {/* Hamburger Icon */}
                        {isMenuOpen ? 'X' : '☰'}
                    </button>
                </div>
            </div>

            {/* Dropdown Menu for Mobile */}
            {isMenuOpen && (
                <div className='z-50 h-screen fixed top-1/4 w-full flex justify-center items-center bg-[#1b2232]/70 backdrop-blur-md '>
                <div className=" lg:hidden  text-white  text-center py-4 flex flex-col justify-center items-start gap-5">
                    <Link href={"/about"} onClick={()=> setIsMenuOpen(false)} className="block text-lg mt-2">About Techzy</Link>
                    <Link href={"/learnTech"} onClick={()=> setIsMenuOpen(false)} className="block text-lg mt-2">Learn Tech</Link>
                    <Link href={"/blog"} onClick={()=> setIsMenuOpen(false)} className="block text-lg mt-2">Blog</Link>
                    <Link href={"/login"} onClick={()=> setIsMenuOpen(false)} className="block text-lg mt-2">Login</Link>
                    <Link href={"/signup"} onClick={()=> setIsMenuOpen(false)} className=" text-lg mt-2 h-12 bg-PrimaryPurple flex justify-start pl-2 items-center w-52 rounded-xl">Become a Techie</Link>
                </div>
                </div>
            )}
        </div>
    )
}
