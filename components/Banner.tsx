"use client";

import { useState, useEffect } from 'react';
import close from "@/public/svgs/close.svg";
import Image from "next/image";

export default function Banner({ setBannerHeight }: { setBannerHeight: any }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        setBannerHeight('100px'); // Replace 100px with the height of your Banner
    }, [setBannerHeight]);

    const closeBanner = () => {
        setIsVisible(false);
        setBannerHeight('0px');
    };

    return (
        isVisible && (
            <div className="flex justify-between w-full lg:px-8 lg:py-2 items-start lg:items-center px-2 py-4 text-sm lg:text-lg bg-[#fff4e3]">
                <div className="text-center space-y-2 px-12 lg:space-y-0">
                    <span className="font-bold uppercase">New:</span> Earn up to $100k in BTRST every time you refer a company to Braintrust!
                    <button className="ml-4 border-black py-1 px-6 border-2 rounded-3xl hover:bg-black hover:text-white transition-all duration-300">
                        Get Started
                    </button>
                </div>
                <Image src={close} alt="close" className="cursor-pointer w-3 lg:w-5 h-3 lg:h-5" onClick={closeBanner} />
            </div>
        )
    );
}