import Image from "next/image";

export default function SolutionsHero() {
    return (
        <div className="relative w-full h-[600px] mt-12 flex flex-col items-center justify-center">
            <Image src="/solutions-images/solution-image.png" alt="solution-image" fill className="object-cover object-center
            rounded-3xl"/>
            <div className="absolute w-full h-full z-10 bg-gray-900/50 rounded-3xl" /> {/*Overlay*/}

            {/* Right Section */}
            <div className="absolute flex flex-col items-center justify-center p-4 lg:p-12">
                <h1 className="font-IBM-plex-sans text-white text-3xl xl:text-5xl text-center">Solutions for Every Role in the
                    Live Entertainment Ecosystem</h1>
                <p className="font-inter text-[#A4A4A4] text-xl text-center mt-6">Getavails isn't just a booking tool, it's a
                    tailored ecosystem that adapts to your workflow. We understand that each role in the entertainment chain faces
                    unique challenges. That’s why we’ve designed Getavails to meet your specific needs, streamline your
                    operations, and amplify your impact, no matter your role.</p>
            </div>
        </div>
    );
}