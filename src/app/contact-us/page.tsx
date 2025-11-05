import ContactUsHero from "@/myComponents/ContactUs/ContactUsHero";
import ContactUsThreeCards from "@/myComponents/ContactUs/ContactUsThreeCards";
import { FiMail } from "react-icons/fi";
import { FaArrowRightLong, FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import ContactUsForm from "@/myComponents/ContactUs/ContactUsForm";
import Image from "next/image";

export default function ContactUs() {
    return (
        <div className="px-6 sm:px-12 md:px-16 xl:px-28">
            <ContactUsHero />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
                <ContactUsThreeCards title="General Inquiries" description="For platform questions, partnerships and media."
                    iconName={FiMail} iconDescription="support@getavails.com" />
                <ContactUsThreeCards title="Support" description="Get instant help from our support specialists."
                    iconName={FaMessage} iconDescription="Available 9 AM – 9 PM" />
                <ContactUsThreeCards title="For Business" description="For sponsorships, collaborations, and enterprise bookings."
                    iconName={IoCall} iconDescription="Call Us: +1 (XXX) XXX-XXXX" />
            </div>

            <ContactUsForm />

            {/* Map */}
            <div className="flex flex-col items-center justify-center gap-3 mt-16">
                <h1 className="font-IBM-plex-sans font-semibold text-[#235789] text-4xl">Our Global Reach</h1>
                <p className="font-inter font-normal text-[#6B7280] mt-2">Connecting talent and opportunities across
                    borders - wherever you are, GetAvails is there.</p>
                <div className="relative w-full h-[550px] mt-12">
                    <Image src="/contact-us/map.png" alt="map" fill className="object-cover object-center" />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-16 pt-12 pb-12 bg-black">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#FFFFFF] text-center">Start booking smarter.</h1>
                <div className="flex flex-col md:flex-row gap-4 mt-12">
                    <button className="px-4 py-2 rounded-full text-black bg-white dark:text-gray-300 
                    dark:hover:bg-gray-800 transition-colors flex gap-2 cursor-pointer">
                        View Features
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
