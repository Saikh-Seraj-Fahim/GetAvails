'use client'
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FaHandshake } from "react-icons/fa6";
import { AiFillAudio } from "react-icons/ai";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="w-full h-screen flex">
      {/* Left Image Section */}
      <div className="hidden lg:block lg:w-[50%] xl:w-[60%] 2xl:w-[70%] h-full relative">
        <Image src="/sign-up-images/stage.png" alt="background" fill className="object-cover object-center" />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-full flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col gap-6">
          <Image src="/sign-up-images/logo.svg" alt="logo" width={50} height={50} />
          <div className="flex flex-col gap-3">
            <h1 className="font-inter font-semibold text-[#1E1E1E] text-xl">Which Role Are You Joining As?</h1>
            <p className="font-inter text-[#6B7280] text-sm">Define your role and let us customize your dashboard</p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="w-full max-w-sm mt-10">
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
                  <p className="font-inter text-[#235789] text-xl">Agents</p>
                </div>
                {/* The arrow icon will automatically appear here on the right
                because of `justify-between` */}
              </AccordionTrigger>
              <AccordionContent className="font-inter text-[#6B7280] space-y-4">
                <p>
                  Manage your roster, negotiate deals, and track performance, all from one
                  central dashboard.
                </p>
                <Link href="/sign-up-agent">
                  <button className="px-4 py-2 text-[#235789] font-normal border border-[#235789] rounded-4xl
                  cursor-pointer font-inter">
                    Join as Agent
                  </button>
                </Link>
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
                  <p className="font-inter text-[#235789] text-xl">Venues</p>
                </div>
                {/* The arrow icon will automatically appear here on the right
                because of `justify-between` */}
              </AccordionTrigger>
              <AccordionContent className="font-inter text-[#6B7280] space-y-4">
                <p>
                  Manage your space, manage bookings, and connect with the right talent to keep your calendar full
                  and your audience engaged.
                </p>
                <Link href="sign-up-venue">
                  <button className="px-4 py-2 text-[#235789] font-normal border border-[#235789] rounded-4xl
                  cursor-pointer font-inter">
                    Join as Venues
                  </button>
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center justify-between">
                {/* Left side (icon + label) */}
                <div className="flex items-center gap-2">
                  <AiFillAudio className="w-7 h-7" />
                  <p className="font-inter text-[#235789] text-xl">Artists</p>
                </div>
                {/* The arrow icon will automatically appear here on the right
                because of `justify-between` */}
              </AccordionTrigger>
              <AccordionContent className="font-inter text-[#6B7280] space-y-4">
                <p>
                  Showcase your talent, get discovered, and secure gigs while managing your schedule and performance
                  details in one place.
                </p>
                <Link href="sign-up-artist">
                  <button className="px-4 py-2 text-[#235789] font-normal border border-[#235789] rounded-4xl
                  cursor-pointer font-inter">
                    Join as Artists
                  </button>
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="flex items-center justify-between">
                {/* Left side (icon + label) */}
                <div className="flex items-center gap-2">
                  <FaHandshake className="w-7 h-7" />
                  <p className="font-inter text-[#235789] text-xl">Buyer</p>
                </div>
                {/* The arrow icon will automatically appear here on the right
                because of `justify-between` */}
              </AccordionTrigger>
              <AccordionContent className="font-inter text-[#6B7280] space-y-4">
                <p>
                  Browse artists, book performances, and streamline payments-all while ensuring unforgettable
                  experiences for your events.
                </p>
                <Link href="sign-up-buyer">
                  <button className="px-4 py-2 text-[#235789] font-normal border border-[#235789] rounded-4xl
                  cursor-pointer font-inter">
                    Join as Buyer
                  </button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
