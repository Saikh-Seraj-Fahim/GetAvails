import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { AiFillAudio } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";

export default function WhichRole() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-12 mt-12">
            {/* Accordion Section */}
            <div className="w-full lg:w-1/2 px-16">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="flex items-center justify-between">
                            {/* Left side (icon + label) */}
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/sign-up-images/agents-logo.svg"
                                    alt="agent-logo"
                                    height={20}
                                    width={20}
                                />
                                <span className="font-inter text-[#235789] text-xl">Agents</span>
                            </div>
                            {/* The arrow icon will automatically appear here on the right
                                because of `justify-between` */}
                        </AccordionTrigger>
                        <AccordionContent className="font-inter text-[#6B7280]">
                            <p>
                                Manage your roster, negotiate deals and track performance, all from one
                                central dashboard.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="flex items-center justify-between">
                            {/* Left side (icon + label) */}
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/sign-up-images/venues-logo.svg"
                                    alt="agent-logo"
                                    height={20}
                                    width={20}
                                />
                                <span className="font-inter text-[#235789] text-xl">Venues</span>
                            </div>
                            {/* The arrow icon will automatically appear here on the right
                                because of `justify-between` */}
                        </AccordionTrigger>
                        <AccordionContent className="font-inter text-[#6B7280]">
                            <p>
                                Manage your space, manage bookings, and connect with the right talent to keep your calendar full
                                and your audience engaged.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="flex items-center justify-between">
                            {/* Left side (icon + label) */}
                            <div className="flex items-center gap-2">
                                <AiFillAudio className="w-7 h-7" />
                                <span className="font-inter text-[#235789] text-xl">Artists</span>
                            </div>
                            {/* The arrow icon will automatically appear here on the right
                                because of `justify-between` */}
                        </AccordionTrigger>
                        <AccordionContent className="font-inter text-[#6B7280]">
                            <p>
                                Showcase your talent, get discovered, and secure gigs while managing your schedule and performance
                                details in one place.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="flex items-center justify-between">
                            {/* Left side (icon + label) */}
                            <div className="flex items-center gap-2">
                                <FaHandshake className="w-7 h-7" />
                                <span className="font-inter text-[#235789] text-xl">Organizer</span>
                            </div>
                            {/* The arrow icon will automatically appear here on the right
                                because of `justify-between` */}
                        </AccordionTrigger>
                        <AccordionContent className="font-inter text-[#6B7280]">
                            <p>
                                Browse artists, book performances, and streamline payments-all while ensuring unforgettable
                                experiences for your events.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>


            <div className="w-full lg:w-1/2">
                <div className="relative w-full h-96">
                    <Image src="/home-page-images/which-role.png" alt="which-role-image" fill className="object-cover object-top 
                    rounded-2xl" />
                </div>
            </div>
        </div>
    );
}
