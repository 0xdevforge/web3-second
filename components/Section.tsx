import Image from 'next/image'
import React from 'react'
import art from "@/public/art.png"
import girl from "@/public/girl.png";

export default function Section() {
    return (
        <div className='flex items-center justify-center w-full'>
            <section className='pt-8 mx-96 max-w-4xl my-44 bg-[#f5f8ff]'>
                <div className='grid grid-rows-3 grid-flow-col gap-4'>
                    <div className="row-start-1 row-span-2"><Image src={art} alt="" /></div>
                    <div className='row-start-1 row-span-2 text-center pt-6 space-y-4'>
                        <span className="text-md font-bold">How it works - Talent</span>
                        <p className="text-4xl font-semibold px-20">It&apos; your career, <br /> and you want <br /> opportunities <br /> that work for <br /> you.</p>
                        <p className='pt-6'>
                            The problem is finding high quality
                            <br />
                            work you care about and dealing with
                            <br />
                            all the administration and feels that
                            <br />
                            come with it. Let us help you get back
                            <br />
                            to doing more of what you love.
                        </p>
                        <button className='border-black py-2 px-6 border-2 rounded-3xl bg-black text-white transition-all duration-300 hover:bg-white hover:text-black'>
                            Sign Up
                        </button>
                    </div>
                    <div className='row-start-2 row-end-4  justify-end items-end flex'>
                        <Image src={girl} alt="girl" className='object-cover' />
                    </div>
                </div>

            </section>
        </div>
    )
}
