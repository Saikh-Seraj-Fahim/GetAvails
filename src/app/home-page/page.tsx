"use client"
import HomePageHero from "@/myComponents/HomePageHero";
import JoinEvent from "@/myComponents/JoinEvent";

export default function HomePage() {
    return (
        <div className="xl:px-28">
            <HomePageHero />
            <div className="mt-12">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#235789] text-center">Join Event</h1>
                <p className="font-inter text-[#6B7280] text-center mt-2">You can see upcoming events and buy tickets / join
                    event easily from here</p>
                <div className="flex flex-col xl:flex-row gap-12 mt-12">
                    <JoinEvent />
                    <JoinEvent />
                    <JoinEvent />
                </div>
            </div>
        </div>
    );
}