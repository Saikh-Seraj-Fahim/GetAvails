import { IconType } from "react-icons";

interface BookingJourneyProps {
    iconName: IconType;
    title: string;
    description: string;
}

export default function BookingJourney({ iconName: Icon, title, description }: BookingJourneyProps) {
    return (
        <div className="border-2 rounded-lg p-4 md:p-8">
            <div className="flex gap-3">
                <Icon className="w-7 h-7 text-[#235789]" />
                <h1 className="font-inter text-[#235789] text-xl">{title}</h1>
            </div>
            <p className="font-inter text-[#6B7280] mt-3">{description}</p>
        </div>
    );
}