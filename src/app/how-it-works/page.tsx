import { HiOutlineUserCircle } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { SlNote } from "react-icons/sl";
import { BsRocketTakeoffFill } from "react-icons/bs";
import BookingJourney from "@/myComponents/HowItWorks/BookingJourney";
import HaveQuestions from "@/myComponents/HowItWorks/HaveQuestions";
import HowItWorksForm from "@/myComponents/HowItWorks/HowItWorksForm";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HowItWorks() {
    return (
        <div className="px-6 sm:px-12 md:px-16 xl:px-28">
            <div className="mt-16">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#235789] text-center">Your Booking Journey,
                    Simplified</h1>
                <p className="font-inter text-[#6B7280] text-center mt-2">From search to signed contracts, discover how
                    Getavails connects Artists, Agents, Venues and Buyers in a single, seamless flow.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
                    <BookingJourney iconName={HiOutlineUserCircle} title="Select Your Role" description="Choose whether you're an 
                    Artist, Agent, Venue or Talent Buyer to personalize your experience."/>
                    <BookingJourney iconName={GoSearch} title="Search & Discover" description="Find artists, venues or agents 
                    by availability, genre, location or preference."/>
                    <BookingJourney iconName={SlNote} title="Send Offers & Collaborate" description="Initiate or receive 
                    offers, negotiate details and draft contracts, all in one place."/>
                    <BookingJourney iconName={BsRocketTakeoffFill} title="Book, Sign & Go Live" description="Confirm details, manage 
                    payments and prep for showtime - no messy threads or scattered tools."/>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-16">
                <HaveQuestions />
                <HowItWorksForm />
            </div>

            <div className="flex flex-col items-center justify-center mt-16 pt-12 pb-12 bg-black">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#FFFFFF] text-center">Ready to meet your
                    assistant?</h1>
                <div className="flex flex-col md:flex-row gap-4 mt-12">
                    <button className="p-2 rounded-full text-black bg-white dark:text-gray-300 
                    dark:hover:bg-gray-800 transition-colors flex gap-2 cursor-pointer">
                        Chat With Getavails AI
                        <FaArrowRightLong className="translate-y-1/3" />
                    </button>
                    <button className="p-2 rounded-full text-black bg-white dark:text-gray-300 
                    dark:hover:bg-gray-800 transition-colors cursor-pointer">
                        Try It Free Now
                    </button>
                </div>
            </div>
        </div>
    );
}