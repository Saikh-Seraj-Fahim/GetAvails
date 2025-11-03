import { FaArrowRightLong } from "react-icons/fa6";
import { IconType } from "react-icons";

interface TalentBookingJourneyProps {
    title: string;
    subtitle: string;
    iconName: IconType;
    color: string;
    buttonName: string;
}

export default function TalentBookingJourney({ title, subtitle, iconName: Icon, color, buttonName }: TalentBookingJourneyProps) {
    return (
        <div className="w-full p-8 border-2 rounded-2xl" style={{ borderColor: color }}>
            <div className="flex justify-between items-center">
                <h1 className='font-inter font-semibold text-2xl mt-4' style={{ color: color }}>{title}</h1>
                <Icon className="w-7 h-7" style={{ color: color }} />
            </div>

            <p className="font-inter text-[#6B7280] mt-4">{subtitle}</p>

            <p className="font-inter text-[#6B7280] mt-4">Top Features:</p>

            <ul className="font-inter text-[#6B7280] list-disc list-inside ml-5 space-y-1 mt-2">
                <li>Role-based onboarding (Agent, Artist, Venue, Buyer)</li>
                <li>Profile verification & approval</li>
                <li>Team & multi-user access</li>
                <li>Role-specific dashboards</li>
                <li>Custom profile fields (Genres, Availability, Location)</li>
            </ul>

            <button className="bg-[#235789] text-[#FFFFFF] font-inter px-6 py-2 rounded-full flex items-center gap-2 mt-6 
            cursor-pointer" style={{ backgroundColor: color }}>
                {buttonName}
                <FaArrowRightLong className="w-4 h-4" />
            </button>
        </div>
    );
}