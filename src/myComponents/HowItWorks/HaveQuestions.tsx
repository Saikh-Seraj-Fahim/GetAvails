import { LuMail } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function HaveQuestions() {
    return (
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 mt-9 p-8">
            <h1 className="font-semibold font-IBM-plex-sans text-[#1E1E1E] text-4xl text-center">Have Questions?</h1>
            <h1 className="font-semibold font-IBM-plex-sans text-[#2C73B8] text-4xl text-center">Let’s Chat.</h1>
            <div className="flex gap-2 items-center">
                <LuMail className="w-5 h-5 text-[#2C73B8]" />
                <p className="font-inter text-[#1E1E1E]">support@getavails.com</p>
            </div>
            <div className="flex gap-2 items-center">
                <BiSolidPhoneCall className="w-5 h-5 text-[#2C73B8]" />
                <p className="font-inter text-[#1E1E1E]">+1 (555) 123-4567</p>
            </div>
            <div className="flex gap-2 items-center">
                <FaLocationDot className="w-5 h-5 text-[#2C73B8]" />
                <p className="font-inter text-[#1E1E1E]">Remote-first / USA HQ</p>
            </div>
            <div className="flex gap-2 items-center">
                <a href=""><FaLinkedin className="w-7 h-7 text-[#2C73B8]" /></a>
                <a href=""><RiInstagramFill className="w-7 h-7 text-[#2C73B8]" /></a>
            </div>
        </div>
    );
}