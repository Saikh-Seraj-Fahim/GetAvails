import Testimonial from "@/myComponents/HomePage/Testimonial";
import GetAvailsApart from "@/myComponents/Services/GetAvailsApart";
import ServicesFourCard from "@/myComponents/Services/ServicesFourCard";
import ServicesHero from "@/myComponents/Services/ServicesHero";
import { AiFillAudio } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { FaArrowRightLong, FaRegFolderClosed } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci"
import { LuRefreshCw } from "react-icons/lu";
import { FaPeopleLine } from "react-icons/fa6";

export default function Services() {
    return (
        <div className="px-6 sm:px-12 md:px-16 xl:px-28">
            <ServicesHero />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
                <ServicesFourCard iconName={AiFillAudio} title="Artist Services" descriptionOne="Find and pitch venues with 
                availability filters." descriptionTwo="Manage a professional, shareable artist profile."
                    descriptionThree="Review incoming offers + accept/decline with a click." descriptionFour="Track contracts 
                and payments."/>
                <ServicesFourCard iconName={AiFillAudio} title="Agent Services" descriptionOne="Manage multiple artists from a 
                single dashboard." descriptionTwo="Pitch and book venues on behalf of clients."
                    descriptionThree="Negotiate offers and contracts seamlessly." descriptionFour="Monitor artist schedules, 
                    tours and payments."/>
                <ServicesFourCard iconName={FaHandshake} title="Venue Services" descriptionOne="List available dates and manage 
                bookings easily." descriptionTwo="Discover and connect with artists/agents that fit your event."
                    descriptionThree="Approve or decline offers with real-time notifications." descriptionFour="Track contracts, 
                    rider requirements, and payments."/>
                <ServicesFourCard iconName={FaHandshake} title="Talent Buyer Services" descriptionOne="Search and filter artists 
                by genre, budget, and availability." descriptionTwo="Send booking offers directly to artists or agents."
                    descriptionThree="Compare proposals and manage negotiations in one place." descriptionFour="Securely handle 
                    contracts and payment transactions."/>
            </div>

            <div className="mt-12">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#235789] text-center">What Sets GetAvails
                    Apart</h1>
                <p className="font-inter text-[#6B7280] text-center mt-2">Not just another booking platform - every feature
                    is crafted to reduce friction, increase visibility and drive real results across the live entertainment
                    industry.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
                    <GetAvailsApart iconName={FiLock} title="Verified Contracts" />
                    <GetAvailsApart iconName={FiLock} title="Real-Time Availability" />
                    <GetAvailsApart iconName={FiLock} title="Smart AI Assistant" />
                    <GetAvailsApart iconName={FiLock} title="One-Tap Offer Flow" />
                    <GetAvailsApart iconName={FaRegFolderClosed} title="Digital Press Kits" />
                    <GetAvailsApart iconName={FaPeopleLine} title="Multi-Role Accounts" />
                    <GetAvailsApart iconName={FiLock} title="Global Discovery Engine" />
                    <GetAvailsApart iconName={LuRefreshCw} title="Contract Tracking" />
                    <GetAvailsApart iconName={FiLock} title="Flexible Payment Gateways" />
                    <GetAvailsApart iconName={FiLock} title="Performance Analytics" />
                    <GetAvailsApart iconName={FiLock} title="Add-On Tools" />
                    <GetAvailsApart iconName={CiMobile3} title="Mobile Optimized UX" />
                </div>
            </div>

            <div className="mt-16">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#235789] text-center">Trusted by Top Artists,
                    Venues & Agents Worldwide</h1>
                <p className="font-inter text-[#6B7280] text-center mt-2">From stadium-filling performers to intimate venues,
                    our network spans every corner of the entertainment industry.</p>
                <div className="flex flex-col md:flex-row md:justify-around items-center gap-y-4 mt-9">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-semibold font-inter text-[#1E1E1E] text-4xl">1200+</h1>
                        <p className="font-medium font-inter text-[#6B7280] text-xl">Venues</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-semibold font-inter text-[#1E1E1E] text-4xl">4,500+</h1>
                        <p className="font-medium font-inter text-[#6B7280] text-xl">Artists</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-semibold font-inter text-[#1E1E1E] text-4xl">30K+</h1>
                        <p className="font-medium font-inter text-[#6B7280] text-xl">Bookings Facilitated</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-9 mt-8">
                    <Testimonial imageName="user-logo.png" name="Darren Fields" profession="Indie Artist" review="The platform 
                    connects me with venues I never thought I’d have access to."/>
                    <Testimonial imageName="testimonial-1.png" name="Sophie Turner" profession="Venue Owner" review="GetAvails bridges 
                    the gap between talent and opportunities, and it works flawlessly."/>
                    <Testimonial imageName="testimonial-2.png" name="Ethan Brooks" profession="Artist" review="I used to juggle 
                    multiple apps. Now I just log in to GetAvails and everything’s in one place."/>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-16 pt-12 pb-12 bg-black">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#FFFFFF] text-center">Start booking smarter.</h1>
                <div className="flex flex-col md:flex-row gap-4 mt-12">
                    <button className="px-4 py-2 rounded-full text-black bg-white dark:text-gray-300 
                    dark:hover:bg-gray-800 transition-colors flex gap-2 cursor-pointer">
                        Join Our Network Today
                        <FaArrowRightLong className="translate-y-1/3" />
                    </button>
                    <button className="px-4 py-2 rounded-full text-black bg-white dark:text-gray-300 
                    dark:hover:bg-gray-800 transition-colors cursor-pointer">
                        Learn how it works
                    </button>
                </div>
            </div>
        </div>
    );
}