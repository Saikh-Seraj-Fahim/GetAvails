import { useState } from "react";
import { FaCircleInfo, FaCrown, FaUser } from "react-icons/fa6";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";

export default function PricingSection() {
    const [selected, setSelected] = useState<"monthly" | "annually">("monthly");
    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <div className="bg-[#235789B2] text-white w-[210px] rounded-3xl px-6 py-1.5 flex items-center justify-center gap-2">
                <button onClick={() => setSelected("monthly")} className={`px-4 py-1 rounded-2xl transition-colors font-inter 
                cursor-pointer ${selected === "monthly" ? "bg-white text-black" : ""}`}>Monthly</button>
                <button onClick={() => setSelected("annually")} className={`px-4 py-1 rounded-2xl transition-colors font-inter
                cursor-pointer ${selected === "annually" ? "bg-white text-black" : ""}`}>Annually</button>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 mt-8">
                <div className="w-full p-12 border-2 rounded-2xl bg-[#1E1E1EE5]">
                    <div className="border rounded-lg w-12 h-12 flex items-center justify-center">
                        <FaUser className="text-white w-6 h-6" />
                    </div>
                    <h1 className="text-[#FFFFFF] text-3xl font-semibold mt-4">Personal</h1>
                    <p className="text-[#FFFFFF] text-xl font-medium mt-4">For individuals who want to launch a simple portfolio
                        or landing page.</p>

                    <h1 className="text-[#FFFFFF] text-6xl font-bold mt-7">Free</h1>

                    <div className="flex gap-2 mt-5">
                        <FaCircleInfo className="text-[#FFFFFF] w-6 h-6" />
                        <p className="text-[#FFFFFF] text-xl">Fully responsive Webflow template</p>
                    </div>
                    <button className="w-full bg-[#235789] text-[#FFFFFF] font-inter px-6 py-2 rounded-lg flex items-center 
                    justify-center mt-6 cursor-pointer">
                        Try now
                    </button>
                </div>

                <div className="w-full p-12 border-2 rounded-2xl bg-[#1E1E1EE5]">
                    <div className="flex justify-between">
                        <div className="border rounded-lg w-12 h-12 flex items-center justify-center">
                            <BsFillRocketTakeoffFill className="text-white w-6 h-6" />
                        </div>
                        <p className="bg-[#235789] text-[#FFFFFF] font-inter px-4 py-1 rounded-lg flex items-center 
                            justify-center">
                            Save 65%
                        </p>
                    </div>
                    <h1 className="text-[#FFFFFF] text-3xl font-semibold mt-4">Starter</h1>
                    <p className="text-[#FFFFFF] text-xl font-medium mt-4">For teams who want to build stylish websites fast
                        with Webflow.</p>

                    {selected === "monthly" ? (
                        <div className="flex mt-6">
                            <h1 className="font-bold font-inter text-white text-4xl">$299</h1>
                            <p className="font-inter text-white">/month</p>
                        </div>
                    ) : (
                        <div className="flex mt-6">
                            <h1 className="font-bold font-inter text-white text-4xl">$3200</h1>
                            <p className="font-inter text-white">/year</p>
                        </div>
                    )}

                    <div className="flex gap-2 mt-5">
                        <FaCircleInfo className="text-[#FFFFFF] w-6 h-6" />
                        <p className="text-[#FFFFFF] text-xl">Includes Figma + Webflow files</p>
                    </div>
                    <button className="w-full bg-[#235789] text-[#FFFFFF] font-inter px-6 py-2 rounded-lg flex items-center 
                    justify-center mt-6 cursor-pointer">
                        Subscribe now
                    </button>

                    <div className="flex gap-2 mt-6">
                        <AiOutlineDollar className="text-white w-6 h-6" />
                        <p className="font-inter text-white">30-day money back guarantee</p>
                    </div>
                </div>

                <div className="w-full p-12 border-2 rounded-2xl bg-[#1E1E1EE5]">
                    <div className="border rounded-lg w-12 h-12 flex items-center justify-center">
                        <FaCrown className="text-white w-6 h-6" />
                    </div>
                    <h1 className="text-[#FFFFFF] text-3xl font-semibold mt-4">Premium</h1>
                    <p className="text-[#FFFFFF] text-xl font-medium mt-4">For companies who need advanced features and top-tier
                        support.</p>

                    {selected === "monthly" ? (
                        <div className="flex mt-6">
                            <h1 className="font-bold font-inter text-white text-4xl">$699</h1>
                            <p className="font-inter text-white">/month</p>
                        </div>
                    ) : (
                        <div className="flex mt-6">
                            <h1 className="font-bold font-inter text-white text-4xl">$8600</h1>
                            <p className="font-inter text-white">/year</p>
                        </div>
                    )}

                    <div className="flex gap-2 mt-5">
                        <FaCircleInfo className="text-[#FFFFFF] w-6 h-6" />
                        <p className="text-[#FFFFFF] text-xl">Access to all template collections</p>
                    </div>
                    <button className="w-full bg-[#235789] text-[#FFFFFF] font-inter px-6 py-2 rounded-lg flex items-center 
                    justify-center mt-6 cursor-pointer">
                        Subscribe now
                    </button>

                    <div className="flex gap-2 mt-6">
                        <AiOutlineDollar className="text-white w-6 h-6" />
                        <p className="font-inter text-white">30-day money back guarantee</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
