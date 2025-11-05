import Image from "next/image";

export default function ContactUsHero() {
    return (
        <div className="relative w-full h-[600px] mt-12 flex flex-col items-center justify-center">
            <Image src="/contact-us/contact-us-hero.png" alt="contact-us-hero-image" fill className="object-cover object-center
            rounded-3xl"/>
            <div className="absolute w-full h-full z-10 bg-gray-900/50 rounded-3xl" /> {/*Overlay*/}

            <div className="absolute flex flex-col items-center justify-center p-4 lg:p-12 z-30">
                <h1 className="font-IBM-plex-sans text-[#FFFFFF] text-3xl xl:text-5xl text-center">We’d Love to Hear
                    from You!</h1>
                <p className="font-inter text-[#FFFFFF] text-xl text-center mt-6">Our team is ready to answer your questions,
                    discuss opportunities or walk you through how GetAvails works.</p>
            </div>
        </div>
    );
}
