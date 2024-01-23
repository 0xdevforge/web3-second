import logo from "@/public/svgs/logo.svg"
import Image from "next/image"


export default function Navbar() {
    return (
        <nav className="w-full items-center flex justify-between lg:px-20 lg:py-4">
            <Image src={logo} alt="logo" className="cursor-pointer" />

            <ul className="flex items-center">
                <li className="mr-4">For Companies</li>
                <li className="mr-4">For Talent</li>
                <li className="mr-4">About Us</li>
                <li className="mr-4">Blog</li>
                <li className="mr-4">Login</li>
                <li className="mr-4">
                    <button className="border-black py-1 px-6 border-2 rounded-3xl hover:bg-black hover:text-white transition-all duration-300">
                        Sign Up
                    </button>
                </li>
                <li className="mr-4">
                    <button className="border-black py-1 px-6 border-2 rounded-3xl bg-black text-white transition-all duration-300 hover:bg-white hover:text-black">
                        Post a Job
                    </button>
                </li>
            </ul>
        </nav>
    )
}
