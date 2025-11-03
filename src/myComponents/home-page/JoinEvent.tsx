'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function JoinEvent() {
    return (
        <div className="w-full p-8 border-2 rounded-2xl">
            <button className="bg-[#235789] text-[#FFFFFF] font-inter px-4 py-1 rounded-lg cursor-pointer"> Live Concert</button>
            <p className='font-inter mt-4'>25 December 2025, 7:00 PM – 11:00 PM</p>

            <div className="relative w-full h-56 bg-muted overflow-hidden mt-5">
                <Image
                    src="/home-page-images/join-event.png"
                    alt="join-event-image"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            {/* `bg-muted` - Light background color while image loads */}
            {/* `className="object-cover"` - Maintains aspect ratio while covering the entire container (crops if necessary) */}
            {/* `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"` - Tells Next.js which image size to request based 
            on screen width:
            - Mobile (≤768px): Request image at 100% of viewport width
            - Tablet (≤1024px): Request image at 50% of viewport width
            - Desktop (>1024px): Request image at 33% of viewport width */}

            <h1 className='font-inter font-semibold text-3xl mt-6'>Summer Beats 2025</h1>
            <p className='font-inter'>Join the biggest open-air concert of the year featuring top Bangladeshi bands and DJs.
                Experience music, lights, and vibes</p>
            <h1 className='font-inter font-semibold text-3xl mt-4'>Artist</h1>
            <p className='font-inter'>Join the biggest open-air concert of the year featuring top Bangladeshi bands and DJs.
                Experience music, lights, and vibes</p>

            <div className='flex flex-col md:flex-row justify-between items-center mt-6'>
                <p className='font-inter'>Army Stadium, Dhaka, Bangladesh</p>
                <Link href="" className='text-[#235789] font-montserrat underline'>From ৳800 – ৳2500</Link>
            </div>

            <button className="bg-[#235789] text-[#FFFFFF] font-inter px-6 py-2 rounded-4xl flex gap-2 mt-6 cursor-pointer">
                Buy Ticket Now
                <FaArrowRightLong className="translate-y-1/3" />
            </button>
        </div>
    );
}

