import Image from "next/image";
import { FaStar } from "react-icons/fa6";

interface TestimonialProps {
    imageName: string,
    name: string;
    profession: string;
    review: string;
}

export default function Testimonial({ imageName, name, profession, review }: TestimonialProps) {
    return (
        <div className="border rounded-lg p-6">
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <div className="w-12 h-12 relative">
                        <Image src={`/home-page-images/${imageName}`} alt="testimonial-1" fill
                            className="object-cover rounded-full" />
                    </div>
                    <div>
                        <h1 className="font-semibold font-inter text-xl text-black">{name}</h1>
                        <p className="font-medium font-inter text-[#6B7280]">{profession}</p>
                    </div>
                </div>
                <div className="flex">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                </div>
            </div>

            <hr className="mt-6" />

            <p className="font-inter text-black mt-4">{review}</p>
        </div>
    );
}