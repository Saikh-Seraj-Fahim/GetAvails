"use client"
import HomePageHero from "@/myComponents/HomePage/HomePageHero";
import Insights from "@/myComponents/HomePage/insights";
import JoinEvent from "@/myComponents/HomePage/JoinEvent";
import PricingSection from "@/myComponents/HomePage/PricingSection";
import TalentBookingJourney from "@/myComponents/HomePage/TalentBookingJourney";
import TalkAssistant from "@/myComponents/HomePage/TalkAssistant";
import Testimonial from "@/myComponents/HomePage/Testimonial";
import WhichRole from "@/myComponents/HomePage/WhichRole";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

export default function HomePage() {
    return (
        <div className="px-6 sm:px-12 md:px-16 xl:px-28">
            <HomePageHero />

            {/* Join Event */}
            <div className="mt-16">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#235789] text-center">Join Event</h1>
                <p className="font-inter text-[#6B7280] text-center mt-2">You can see upcoming events and buy tickets / join
                    event easily from here</p>
                <div className="flex flex-col xl:flex-row gap-12 mt-12">
                    <JoinEvent />
                    <JoinEvent />
                    <JoinEvent />
                </div>
            </div>

            {/* Talent Booking */}
            <div className="mt-16">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#235789] text-center">Your Talent Booking Journey,
                    Simplified</h1>
                <p className="font-inter text-[#6B7280] text-center mt-2">Everything you need to onboard, discover talent and
                    make offers in one flow.</p>

                <div className="flex flex-col xl:flex-row gap-12 mt-12">
                    <TalentBookingJourney title="Set Up Your Profile"
                        subtitle="Quickly onboard and set up a role-based profile to start using Getavails."
                        iconName={CgProfile} color="#235789" buttonName="Start Now" />

                    <TalentBookingJourney title="Discover Talent & Venues"
                        subtitle="Browse and filter through artists, venues, and available events with smart search."
                        iconName={IoSearch} color="#A88F4E" buttonName="Explore Listings" />

                    <TalentBookingJourney title="Make Offers & Inquiries"
                        subtitle="Send offers, submit inquiries, and manage negotiations - all inside the platform."
                        iconName={CgProfile} color="#C1292E" buttonName="See How It Works" />
                </div>
            </div>

            {/* Which Role */}
            <div className="mt-16">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#235789] text-center">Which Role Are You
                    Joining As?</h1>
                <p className="font-inter text-[#6B7280] text-center mt-2">Define your role and let us customize your dashboard.</p>
                <WhichRole />
            </div>

            {/* Pricing */}
            <div className="mt-16">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#235789] text-center">Free to Start. Powerful When
                    You Upgrade.</h1>
                <p className="font-inter text-[#6B7280] text-center mt-2">Choose a plan that fits your role — Agent, Venue, Artist
                    or Buyer.</p>
                <PricingSection />
            </div>

            {/* Testimonial */}
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

            {/* Insights */}
            <div className="flex flex-col items-center justify-center mt-16 bg-[#1E1E1E]">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#FFFFFF] pt-16">Insights from the Stage &
                    Studio</h1>
                <p className="font-inter text-[#A4A4A4] mt-2">From stadium-filling performers to intimate venues,
                    our network spans every corner of the entertainment industry.</p>
                <Insights />
                <Link href="/blogs" className="text-white mt-8 underline">View All Blog Posts</Link>
            </div>

            {/* TalkAssistant */}
            <div className="flex flex-col items-center justify-center mt-16">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#235789]">Talk to Your Assistant. Book in
                    Minutes.</h1>
                <p className="font-inter text-[#A4A4A4] mt-2">Need to find talent, check availability, confirm a venue, or send
                    a contract? Getavails AI Assistant helps you do it faster - just like texting a team member.</p>
                <TalkAssistant />
            </div>

            <div className="flex flex-col items-center justify-center mt-16 pt-12 pb-12 bg-black">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#FFFFFF]">Book Smarter. Tour Faster. Getavails
                    is Here.</h1>
                <div className="flex flex-col md:flex-row gap-4 mt-12">
                    <button className="p-2 rounded-full text-black bg-white dark:text-gray-300 
                    dark:hover:bg-gray-800 transition-colors flex gap-2 cursor-pointer">
                        Get Started – It’s Free
                        <FaArrowRightLong className="translate-y-1/3" />
                    </button>
                    <button className="p-2 rounded-full text-black bg-white dark:text-gray-300 
                    dark:hover:bg-gray-800 transition-colors cursor-pointer">
                        Learn how it works
                    </button>
                </div>
            </div>
        </div>
    );
}