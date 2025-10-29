'use client'

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

export default function SignUp() {
    return (
        <div className="w-full h-screen flex">
            {/* Left Image Section */}
            <div className="lg:w-[70%] relative hidden lg:block">
                <Image
                    src="/stage.png"
                    alt="Sign Up Background Image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>


            {/* Right Form Section */}
            <div className="w-full lg:w-[30%] flex flex-col items-center justify-center px-8 py-10 bg-white">
                <div>
                    {/* Logo */}
                    <div className="mb-6">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={80}
                            height={80}
                        />
                    </div>

                    {/* Title & Subtitle */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-semibold font-inter text-[#1E1E1E]">Which Role Are You Joining As?</h1>
                        <p className="text-[#6B7280] font-inter font-semibold mt-2">Define your role and let us customize your dashboard</p>
                    </div>
                </div>

                {/* Accordion Section */}
                <div className="mt-10 w-full max-w-sm">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="flex items-center justify-between">
                                {/* Left side (icon + label) */}
                                <div className="flex items-center gap-2">
                                    <Image
                                        src="/agents-logo.svg"
                                        alt="agent-logo"
                                        height={20}
                                        width={20}
                                    />
                                    <span className="font-inter text-[#235789] text-xl">Agents</span>
                                </div>

                                {/* The arrow icon will automatically appear here on the right
                                because of `justify-between` */}
                            </AccordionTrigger>
                            <AccordionContent className="font-inter text-[#6B7280] space-y-4">
                                <p>
                                    Manage your roster, negotiate deals, and track performance, all from one
                                    central dashboard.
                                </p>
                                <button className="px-4 py-2 text-[#235789] font-normal border border-[#235789] rounded-4xl
                                cursor-pointer font-inter">
                                    Join as Agent
                                </button>
                            </AccordionContent>

                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="flex items-center justify-between">
                                {/* Left side (icon + label) */}
                                <div className="flex items-center gap-2">
                                    <Image
                                        src="/agents-logo.svg"
                                        alt="agent-logo"
                                        height={20}
                                        width={20}
                                    />
                                    <span className="font-inter text-[#235789] text-xl">Venues</span>
                                </div>

                                {/* The arrow icon will automatically appear here on the right
                                because of `justify-between` */}
                            </AccordionTrigger>
                            <AccordionContent className="font-inter text-[#6B7280] space-y-4">
                                <p>
                                    Manage your space, manage bookings, and connect with the right talent to keep your calendar full
                                    and your audience engaged.
                                </p>
                                <button className="px-4 py-2 text-[#235789] font-normal border border-[#235789] rounded-4xl
                                cursor-pointer font-inter">
                                    Join as Venues
                                </button>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="flex items-center justify-between">
                                {/* Left side (icon + label) */}
                                <div className="flex items-center gap-2">
                                    <Image
                                        src="/agents-logo.svg"
                                        alt="agent-logo"
                                        height={20}
                                        width={20}
                                    />
                                    <span className="font-inter text-[#235789] text-xl">Artists</span>
                                </div>

                                {/* The arrow icon will automatically appear here on the right
                                because of `justify-between` */}
                            </AccordionTrigger>
                            <AccordionContent className="font-inter text-[#6B7280] space-y-4">
                                <p>
                                    Showcase your talent, get discovered, and secure gigs while managing your schedule and performance
                                    details in one place.
                                </p>
                                <button className="px-4 py-2 text-[#235789] font-normal border border-[#235789] rounded-4xl
                                cursor-pointer font-inter">
                                    Join as Artists
                                </button>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="flex items-center justify-between">
                                {/* Left side (icon + label) */}
                                <div className="flex items-center gap-2">
                                    <Image
                                        src="/agents-logo.svg"
                                        alt="agent-logo"
                                        height={20}
                                        width={20}
                                    />
                                    <span className="font-inter text-[#235789] text-xl">Organizer</span>
                                </div>

                                {/* The arrow icon will automatically appear here on the right
                                because of `justify-between` */}
                            </AccordionTrigger>
                            <AccordionContent className="font-inter text-[#6B7280] space-y-4">
                                <p>
                                    Browse artists, book performances, and streamline payments-all while ensuring unforgettable
                                    experiences for your events.
                                </p>
                                <button className="px-4 py-2 text-[#235789] font-normal border border-[#235789] rounded-4xl
                                cursor-pointer font-inter">
                                    Join as Artists
                                </button>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
