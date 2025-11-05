import { IconType } from "react-icons";
interface EverythingYouNeedProps {
    iconName: IconType;
    color: string;
    description: string;
}
export default function EverythingYouNeed({ iconName: Icon, color, description }: EverythingYouNeedProps) {
    return (
        <div className="border-2 rounded-2xl p-6">
            <Icon className="w-7 h-7" style={{ color: color }} />
            <p className="font-inter mt-2">{description}</p>
            <p className="font-inter text-[#6B7280] mt-2">Features:</p>
            <ul className="font-inter text-[#6B7280] list-disc list-inside ml-5 space-y-1 mt-2">
                <li>Personalized onboarding by role (Agent, Artist, Venue, Buyer)</li>
                <li>Artist claiming and management by agents</li>
                <li>Venue profiles with dynamic availability calendar</li>
                <li>Buyer profiles with saved preferences and inquiry management</li>
            </ul>
        </div>
    );
}
