import OneCorePlatform from "@/myComponents/Solutions/OneCorePlatform";
import OnePlatform from "@/myComponents/Solutions/OnePlatform";
import SolutionsHero from "@/myComponents/Solutions/SolutionsHero";
import { FaArrowRightLong, FaMessage } from "react-icons/fa6";
import { IoLinkSharp } from "react-icons/io5";

export default function Solutions() {
    return (
        <div className="px-6 sm:px-12 md:px-16 xl:px-28">
            <SolutionsHero />
            <div className="mt-16">
                <h1 className="text-[#235789] text-4xl font-semibold font-inter text-center">One Platform. Multiple
                    Possibilities.</h1>
                <p className="text-[#6B7280] font-inter mt-4 text-center">Whether you're booking talent, managing tours
                    or hosting sold-out shows, Getavails simplifies your operations and expands your opportunities, all from
                    one powerful platform.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
                    <OnePlatform title="Discover & Book the Right Talent Fast" description="Easily browse artist profiles, 
                    availability, and past performance data. Send offers, manage contracts, and track responses - all in one 
                    place. With Getavails, securing talent is no longer a waiting game."/>
                    <OnePlatform title="Get Seen. Get Booked. Get Paid." description="Premium members gain access to intelligent 
                    booking tools that analyze performance data, availability, and location to auto-generate optimized offers. 
                    This dramatically streamlines negotiations and reduces"/>
                    <OnePlatform title="Fill Your Calendar With Acts That Fit" description="Premium members gain access to 
                    intelligent booking tools that analyze performance data, availability, and location to auto-generate optimized 
                    offers. This dramatically streamlines negotiations and reduces"/>
                    <OnePlatform title="Control the Career, Not the Chaos" description="Premium members gain access to intelligent 
                    booking tools that analyze performance data, availability, and location to auto-generate optimized offers. This 
                    dramatically streamlines negotiations and reduces"/>
                </div>
            </div>

            <div className="mt-16">
                <h1 className="text-[#235789] text-4xl font-semibold font-inter text-center">One Core Platform. Shared
                    Superpowers.</h1>
                <p className="text-[#6B7280] font-inter mt-4 text-center">No matter your role, Getavails equips you with robust
                    tools to get the job done - faster, smarter, and stress-free.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                    <OneCorePlatform iconName={FaMessage} title="Centralized Messaging" description="Keep all your conversations in 
                    one place, across roles, gigs, and timelines - clear, fast, and searchable."/>
                    <OneCorePlatform iconName={FaMessage} title="Smart Availability Search" description="Keep all your conversations 
                    in one place, across roles, gigs, and timelines - clear, fast, and searchable."/>
                    <OneCorePlatform iconName={IoLinkSharp} title="Calendar Sync" description="Keep all your conversations in 
                    one place, across roles, gigs, and timelines - clear, fast, and searchable."/>
                    <OneCorePlatform iconName={FaMessage} title="In-app Offers & Contracts" description="Keep all your conversations in 
                    one place, across roles, gigs, and timelines - clear, fast, and searchable."/>
                    <OneCorePlatform iconName={FaMessage} title="Secure Payment Flows" description="Keep all your conversations in 
                    one place, across roles, gigs, and timelines - clear, fast, and searchable."/>
                    <OneCorePlatform iconName={FaMessage} title="Role-Specific Dashboards" description="Keep all your conversations in 
                    one place, across roles, gigs, and timelines - clear, fast, and searchable."/>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-16 pt-12 pb-12 bg-black">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#FFFFFF] text-center">Find Your Flow on
                    Getavails</h1>
                <div className="flex flex-col md:flex-row gap-4 mt-12">
                    <button className="p-2 rounded-full text-black bg-white dark:text-gray-300 
                    dark:hover:bg-gray-800 transition-colors flex gap-2 cursor-pointer">
                        Explore Your Role
                        <FaArrowRightLong className="translate-y-1/3" />
                    </button>
                    <button className="p-2 rounded-full text-black bg-white dark:text-gray-300 
                    dark:hover:bg-gray-800 transition-colors cursor-pointer">
                        Create a Free Account
                    </button>
                </div>
            </div>
        </div>
    );
}