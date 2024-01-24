import logo from "@/public/svgs/logo.svg"
import Image from "next/image";
import linkedin from "@/public/svgs/linkedin.svg";
import x from "@/public/svgs/x.svg";
import youtube from "@/public/svgs/youtube.svg";
import insta from "@/public/svgs/insta.svg";




export default function Footer() {
    return (
        <footer className="w-full flex flex-col lg:px-32 lg:py-32 px-4 ">
            <div className="space-y-4 text-sm lg:text-md">
                <Image alt="logo" src={logo} />
                <p className="flex flex-col space-y-2">
                    <span> Own it.</span>
                    <span> Your work. Your network. Your future.</span>
                </p>
                <div className="flex items-center gap-6">
                    <Image src={linkedin} alt="linkedin" className="w-7 h-7" />
                    <Image src={x} alt="x" className="w-7 h-7" />
                    <Image src={youtube} alt="youtube" className="w-7 h-7" />
                    <Image src={insta} alt="insta" className="w-7 h-7" />
                </div>
            </div>
            <div className="text-[9px] lg:text-[11px] mt-12 lg:mt-28">
                The Braintrust Token is an ERC-20 token issued on the Ethereum blockchain network by the Braintrust Technology Foundation, a nonprofit foundation. Braintrust Tokens do not represent any right to or claim on the Braintrust network or any other person or entity, and has been adopted by the Braintrust network and users for various activities on the network only, such as for staking, governance, voting and payment purposes.
            </div>

            <ul className="lg:flex items-center w-full gap-16 mt-8 hidden ">
                <li>©Braintrust 2024 </li>
                <li className="text-sm text-gray-400 hover:text-black transition-all duration-300 cursor-pointer">Terms</li>
                <li className="text-sm text-gray-400 hover:text-black transition-all duration-300 cursor-pointer">Code of Conduct</li>
                <li className="text-sm text-gray-400 hover:text-black transition-all duration-300 cursor-pointer">Network Standards</li>
                <li className="text-sm text-gray-400 hover:text-black transition-all duration-300 cursor-pointer">Purchase Terms</li>
                <li className="text-sm text-gray-400 hover:text-black transition-all duration-300 cursor-pointer">Referral Terms</li>
                <li className="text-sm text-gray-400 hover:text-black transition-all duration-300 cursor-pointer">Privacy</li>
                <li className="text-sm text-gray-400 hover:text-black transition-all duration-300 cursor-pointer">Cookie Policy</li>



            </ul>
            <ul className="flex flex-col gap-2 my-8 sm:hidden">
                <li className="text-gray-400 text-xs">
                    ©Braintrust 2024
                </li>
                <li className="flex gap-6 text-[10px] text-gray-500">
                    <span>
                        Terms
                    </span>
                    <span>
                        Code of Conduct
                    </span>
                </li>
                <li className="flex gap-6 text-[10px] text-gray-500">
                    <span>
                        Network Standards
                    </span>
                    <span>
                        Purchase Terms
                    </span>
                </li>
                <li className="flex gap-6 text-[10px] text-gray-500">
                    <span>
                        Referral Terms
                    </span>
                    <span>
                        Privacy 
                    </span>
                    <span>
                        Cookie Policy 
                    </span>
                </li>
            </ul>
        </footer>
    )
}
