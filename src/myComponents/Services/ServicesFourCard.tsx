import { IconType } from "react-icons";
interface ServicesFourCardProps {
    iconName: IconType;
    title: string;
    descriptionOne: string;
    descriptionTwo: string;
    descriptionThree: string;
    descriptionFour: string;
}
export default function ServicesFourCard({ iconName: Icon, title, descriptionOne, descriptionTwo, descriptionThree,
    descriptionFour
}: ServicesFourCardProps) {
    return (
        <div className="border-2 rounded-lg p-4 md:p-8">
            <div className="flex gap-3">
                <Icon className="w-7 h-7 text-[#235789]" />
                <h1 className="font-inter text-[#235789] text-xl">{title}</h1>
            </div>
            <ul className="font-inter text-[#6B7280] list-disc list-inside ml-5 space-y-1 mt-2">
                <li>{descriptionOne}</li>
                <li>{descriptionTwo}</li>
                <li>{descriptionThree}</li>
                <li>{descriptionFour}</li>
            </ul>
        </div>
    );
}