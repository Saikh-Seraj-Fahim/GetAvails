"use client"
import HomePageHero from "@/myComponents/HomePageHero";
import JoinEvent from "@/myComponents/JoinEvent";
import TalentBookingJourney from "@/myComponents/TalentBookingJourney";
import WhichRole from "@/myComponents/WhichRole";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";

export default function HomePage() {
    return (
        <div className="xl:px-28">
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
        </div>
    );
}