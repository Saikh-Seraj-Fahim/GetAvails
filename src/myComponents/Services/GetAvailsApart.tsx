import { IconType } from "react-icons";

interface GetAvailsApartProps {
    iconName: IconType;
    title: string;
}

export default function GetAvailsApart({ iconName: Icon, title }: GetAvailsApartProps) {
    return (
        <div className="border-2 rounded-lg p-4 md:p-8">
            <div className="flex gap-3">
                <Icon className="w-7 h-7 text-[#235789]" />
                <h1 className="font-inter text-[#235789] text-xl">{title}</h1>
            </div>
            <p className="font-inter text-[#6B7280] mt-4">All agreements are backed with digital verification, providing
                security for both artists and venues before any commitment is finalized.</p>
        </div>
    );
}
