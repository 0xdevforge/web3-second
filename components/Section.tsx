import Image from 'next/image'
import React from 'react'
import art from "@/public/art.webp";
import girl from "@/public/girl.png";

export default function Section() {
    return (
        <div>
            <div className='text-center space-y-6 my-12 sm:hidden'>
                <span className='text-lg font-semibold '>
                    How it works - Talent
                </span>

                <h1 className='text-3xl px-10 font-semibold'>
                    It&apos; your career,
                    and you want
                    opportunities that
                    work for you.
                </h1>

                <p className='text-xs leading-5 px-10 text-[#0e0e11] pt-6'>
                    The problem is finding high-quality work you care about and dealing with all the administration and fees that come with it. Let us help you get back to doing more of what you love.
                </p>

                <button className="border-black py-1 px-6 border-2 rounded-3xl bg-black text-white transition-all duration-300 hover:bg-white hover:text-black  cursor-pointer">
                    Sign up
                </button>
                <div className=' px-6 rounded-md pt-8'>
                    <Image src={girl} alt="girl" />
                </div>
            </div>
            <div className='w-full  min-h-screen
        lg:grid my-12 hidden 
        grid-cols-12  '>
                <div className='col-span-4 '>
                    <Image src={art} alt="art" className=" " />
                </div>

                <div className="col-span-4 text-center mt-8 space-y-5">
                    <span className='text-xl font-semibold '>
                        How it works - Talent
                    </span>

                    <h1 className='text-6xl font-semibold tracking-tight lg:leading-[4.5rem]'>
                        It&apos; your career,
                        and you want
                        opportunities that
                        work for you.
                    </h1>

                    <p className='text-2xl pt-6'>
                        The problem is finding high-quality work you care about and dealing with all the administration and fees that come with it. Let us help you get back to doing more of what you love.
                    </p>
                </div>

                <div className='col-span-4 justify-end grid items-end'>
                    <Image src={girl} alt="girl" />
                </div>
                d</div >
        </div >
    )
}
