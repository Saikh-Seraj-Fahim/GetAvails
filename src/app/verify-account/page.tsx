"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { InputOTP, InputOTPGroup, InputOTPSlot, } from "@/components/ui/input-otp"

export default function ForgetPassword() {
    return (
        <div className="w-full h-screen flex">
            {/* <div className="hidden lg:block lg:w-[50%] xl:w-[60%] 2xl:w-[70%] h-full bg-[url(/sign-up-images/stage.png)] bg-cover 
            bg-center" /> */}
            {/* The above will cause hydration error. The below is OK. */}

            <div className="hidden lg:block lg:w-[50%] xl:w-[60%] 2xl:w-[70%] h-full relative">
                <Image src="/sign-up-images/stage.png" alt="background" fill className="object-cover object-center" />
            </div>

            {/* Form */}
            <div className="w-full lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-full flex items-center justify-center bg-white">
                <form className="w-full max-w-sm flex flex-col items-center justify-center gap-8">
                    <div className="w-full flex flex-col gap-6">
                        <Image src="/sign-up-images/logo.svg" alt="logo" width={50} height={50} />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-inter font-semibold text-[#1E1E1E] text-xl">Verify Your Account</h1>
                            <p className="font-inter text-[#6B7280] text-sm">Please enter the 6-digit verification code we sent
                                to your registered email to process securely.</p>
                        </div>
                    </div>

                    {/* shadcn */}
                    <div>
                        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>

                    {/* <div className="w-full">
                        <Button type="submit" className="w-full font-inter cursor-pointer bg-[#235789] text-[#FFFFFF] 
                        hover:scale-105 hover:shadow-lg" disabled={isSubmitting}>
                            {isSubmitting ? "Sending OTP..." : "Send OTP"}
                        </Button>
                    </div> */}

                    <div className="w-full">
                        <Button type="submit" className="w-full font-inter cursor-pointer bg-[#235789] text-[#FFFFFF] 
                        hover:scale-105 hover:shadow-lg">
                            Send OTP
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm">
                        <p className="text-[#000000] font-inter">Don't receive code? </p>
                        <Link href="" className="text-blue-700 font-inter font-sm">
                            Resend Now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
