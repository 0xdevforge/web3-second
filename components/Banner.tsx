import close from "@/public/svgs/close.svg";
import Image from "next/image";

export default function Banner() {
    return (
        <div className="flex justify-between w-full lg:px-8 lg:py-2 text-lg bg-[#fff4e3]">
            <div>
                <span className="font-bold uppercase">New:</span> Earn up to $100k in BTRST every time you refer a company to Braintrust!
                <button className="ml-4 border-black py-1 px-6 border-2 rounded-3xl hover:bg-black hover:text-white transition-all duration-300">
                    Get Started
                </button>
            </div>
            <Image src={close} alt="close" className="cursor-pointer" />
        </div>
    )
}
