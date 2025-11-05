import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ServicesHero() {
    return (
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
            <div className="relative w-full lg:w-1/2 h-[570px]">
                <Image src="/services/services-hero.png" alt="services" fill className="object-cover object-center
                rounded-3xl" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
                <h1 className="font-IBM-plex-sans font-semibold text-[#235789] text-4xl">From Search to Signature, We’re
                    With You.</h1>
                <p className="font-inter font-normal text-[#6B7280] mt-2">Discover how Getavails helps Artists, Agents,
                    Venues and Talent Buyers streamline every part of the booking and management process.</p>
                <Link href="">
                    <button className="px-4 py-2 rounded-full font-inter text-white bg-[#235789] dark:text-gray-300 
                dark:hover:bg-gray-800 transition-colors flex gap-2 cursor-pointer w-fit">
                        Explore Role-Based Services
                        <FaArrowRightLong className="translate-y-1/3" />
                    </button>
                </Link>
            </div>
        </div>
    );
}