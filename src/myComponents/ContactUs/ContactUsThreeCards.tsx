import { IconType } from "react-icons";
interface ContactUsThreeCardsProps {
    title: string;
    description: string;
    iconName: IconType;
    iconDescription: string;
}
export default function ContactUsThreeCards({ title, description, iconName: Icon, iconDescription }: ContactUsThreeCardsProps) {
    return (
        <div className="border border-[#235789] rounded-lg p-6 flex flex-col gap-3 items-center justify-center">
            <h1 className="font-inter font-semibold text-[#1E1E1E] text-3xl text-center">{title}</h1>
            <p className="font-inter text-[#A4A4A4] text-xl text-center">{description}</p>
            <div className="flex gap-2 mt-4">
                <Icon className="w-7 h-7 text-[#235789]" />
                <p className="font-inter text-[#1E1E1E]">{iconDescription}</p>
            </div>
        </div>
    );
}
