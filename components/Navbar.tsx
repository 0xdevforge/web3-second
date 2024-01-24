"use client";

import { useState } from 'react';
import logo from "@/public/svgs/logo.svg";
import Image from "next/image";
import close from "@/public/svgs/menu-close.svg";
import menu from "@/public/svgs/menu-icon.svg";
import right from "@/public/svgs/right.svg";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="w-full items-center flex justify-between p-4 lg:px-20 lg:py-4  bg-white">
            <Image src={logo} alt="logo" className="cursor-pointer" />

            <div className="lg:hidden">
                {menuOpen ? (
                    // Close icon and expanded content
                    <>
                        <button
                            onClick={toggleMenu}
                            className="text-black text-xl ml-4 lg:hidden focus:outline-none"
                        >
                            {menuOpen ? (
                                <Image src={close} alt="Close menu" />
                            ) : (
                                <Image src={menu} alt="Open menu" />
                            )}
                        </button>
                        {menuOpen && (
                            <div className="lg:hidden absolute left-0 bg-white h-[360px]  w-full">
                                <div className="flex flex-col px-6 pt-6">
                                    <span className="mb-2 font-semibold text-lg">For Companies</span>
                                    <span className="mb-2 font-semibold text-lg">For Talent</span>
                                    <span className="mb-2 font-semibold text-lg">About Us</span>
                                    <span className="mb-2 font-semibold text-lg">Blog</span>
                                    <span className="mb-2 font-semibold text-lg">Login</span>
                                    <div className="my-2 border-b-2 border-black">
                                    </div>
                                    <div className=" flex gap-2 text-lg font-medium">
                                        Sign Up <Image src={right} alt="right" />
                                    </div>
                                    <div className="my-2 border-b-2 border-black">
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <button className="border-black border-2 w-[150px]  py-2 text-lg font-semibold ">
                                            Hire Talent
                                        </button>
                                        <Image src={right} alt="right" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    // Menu icon
                    <button
                        onClick={toggleMenu}
                        className="text-black text-xl focus:outline-none"
                    >
                        <Image src={menu} alt="Open menu" />

                    </button>
                )}
            </div>

            {/* Desktop navigation */}
            <ul className="items-center hidden font-medium text-sm lg:flex">
                <li className="mr-4 hover:border-b-2 border-black cursor-pointer text-black ">For Companies</li>
                <li className="mr-4 hover:border-b-2 border-black cursor-pointer text-black ">For Talent</li>
                <li className="mr-4 hover:border-b-2 border-black cursor-pointer text-black ">About Us</li>
                <li className="mr-4 hover:border-b-2 border-black cursor-pointer text-black ">Blog</li>
                <li className="mr-4 hover:border-b-2 border-black cursor-pointer text-black ">Login</li>
                <li className="mr-4 cursor-pointer text-black ">
                    <button className="border-black py-1 px-6 border-2 rounded-3xl hover:bg-black hover:text-white transition-all duration-300">
                        Sign Up
                    </button>
                </li>
                <li className="mr-4 cursor-pointer font-medium text-sm text-black ">
                    <button className="border-black py-1 px-6 border-2 rounded-3xl bg-black text-white transition-all duration-300 hover:bg-white  cursor-pointer hover:text-black">
                        Post a Job
                    </button>
                </li>
            </ul>
        </nav>
    );
}
