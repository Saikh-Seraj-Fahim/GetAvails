import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineSend } from "react-icons/ai";

export default function TalkAssistant() {
    return (
        <div className="border border-[#5F7F9E4D] rounded-lg p-12 mt-12">
            <h1 className="text-[#235789] text-4xl font-semibold font-inter">Seamless Event Planning with AI Assistance.</h1>
            <p className="text-[#6B7280] font-inter mt-4">Your Role-Based AI Assistant Is Ready.</p>
            <div className="flex flex-col lg:flex-row gap-4 mt-7">
                <button className="bg-[#E9E9E980] p-2 rounded-lg font-inter">Find available rock artists in Austin</button>
                <button className="bg-[#E9E9E980] p-2 rounded-lg font-inter">Send contract to Venue X for Aug 12</button>
                <button className="bg-[#E9E9E980] p-2 rounded-lg font-inter">What time is Artist Y free?</button>
            </div>
            <div className="relative w-full mt-8">
                <Input type="text" placeholder="Need to find talent, check availability, confirm a venue, or send a contract?"
                    className="pr-10 font-inter bg-[#F2F2F2] text-black" // leave space for the send button
                />
                <Button type="submit" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer">
                    <AiOutlineSend />
                </Button>
            </div>
        </div>
    );
}
