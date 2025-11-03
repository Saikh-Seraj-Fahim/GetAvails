import Image from "next/image";

export default function FeaturesHero() {
    return (
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
            <div className="relative w-full lg:w-1/2 h-[570px]">
                <Image src="/features-images/features-hero.png" alt="features" fill className="object-cover object-center
                rounded-3xl" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
                <h1 className="font-IBM-plex-sans font-semibold text-[#235789] text-4xl">Powerful Features Built for Artists,
                    Agents, Venues & Buyers</h1>
                <p className="font-inter font-normal text-[#6B7280] mt-2">Whether you're booking talent or managing your own
                    gigs, Getavails has everything you need.</p>
                <p className="font-inter font-medium text-[#235789] text-2xl">Search Availabilities</p>
                <p className="font-inter text-[#6B7280] text-xl">With the Free plan, users can initiate basic availability searches
                    for artists or venues once per day, ideal for casual browsing or early-stage planning. Premium users unlock
                    unlimited searches, empowering faster booking cycles and broader discovery potential.</p>
            </div>
        </div>
    );
}