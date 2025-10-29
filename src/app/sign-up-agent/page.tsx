"use client"
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

const registrationSchema = z.object({
    fullNameOrCompanyName: z
        .string()
        .min(1, "Name must be at least 1 characters")
        .max(100, "Name must not exceed 100 characters")
        .trim(),

    emailAddress: z
        .string()
        .email("Invalid email address")
        .toLowerCase()
        .trim(),

    countryOrCity: z
        .string()
        .min(2, "Country is required")
        .trim(),

    experience: z
        .number()
        .int("Experience must be a whole number")
        .min(0, "Experience cannot be negative")
        .max(50, "Experience seems too high"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        ),

    confirmPassword: z.string()
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

// Type inference from schema
type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function SignUpAgent() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm<RegistrationFormData>({ // Add type parameter here
        resolver: zodResolver(registrationSchema),
        mode: "onChange", // Add this for immediate validation
        defaultValues: {
            fullNameOrCompanyName: "",
            emailAddress: "",
            countryOrCity: "",
            experience: 0,
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit = async (data: RegistrationFormData) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Form submitted:", data);
            //router.push("/sign-in");
            // Handle successful submission here
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    return (
        <div className="w-full h-screen flex">
            <div className="hidden lg:block lg:w-[50%] xl:w-[60%] 2xl:w-[70%] h-full bg-[url(/sign-up-images/stage.png)] bg-cover bg-center" />

            {/* Form */}
            <div className="w-full lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-full flex items-center justify-center bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
                    <div className="w-full flex flex-col gap-6">
                        <Image src="/sign-up-images/logo.svg" alt="logo" width={50} height={50} />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-inter font-semibold text-[#1E1E1E] text-xl">Start Your Journey as an Agent.</h1>
                            <p className="font-inter text-[#6B7280] text-sm">Join as an agent and simplify artist management with
                                our all-in-one booking system.</p>
                        </div>
                    </div>

                    {/* shadcn */}
                    <div className="w-full grid gap-3 items-center mt-8">
                        <label htmlFor="fullNameOrCompanyName" className="font-inter text-sm">Full Name / Company Name</label>
                        <Input type="text" id="fullNameOrCompanyName" placeholder="Enter Your full name / company name"
                            className="font-inter bg-[#F2F2F2]"  {...register("fullNameOrCompanyName")} />
                        {errors.fullNameOrCompanyName && (
                            <p className="text-red-500 text-sm font-poppins">{errors.fullNameOrCompanyName.message}</p>
                        )}
                    </div>

                    <div className="w-full grid gap-3 items-center mt-8">
                        <label htmlFor="emailAddress" className="font-inter text-sm">Email Address</label>
                        <Input type="text" id="emailAddress" placeholder="Enter Your email "
                            className="font-inter bg-[#F2F2F2]" {...register("emailAddress")} />
                        {errors.emailAddress && (
                            <p className="text-red-500 text-sm font-poppins">{errors.emailAddress.message}</p>
                        )}
                    </div>

                    <div className="w-full grid gap-3 items-center mt-8">
                        <label htmlFor="countryOrCity" className="font-inter text-sm">Country / City</label>
                        <Input type="text" id="countryOrCity" placeholder="Enter Your country/city"
                            className="font-inter bg-[#F2F2F2]" {...register("countryOrCity")} />
                        {errors.countryOrCity && (
                            <p className="text-red-500 text-sm font-poppins">{errors.countryOrCity.message}</p>
                        )}
                    </div>

                    <div className="w-full grid gap-3 items-center mt-8">
                        <label htmlFor="experience" className="font-inter text-sm">Experience</label>
                        <Input type="number" id="experience" placeholder="Enter Your experience duration"
                            className="font-inter bg-[#F2F2F2]" {...register("experience", { valueAsNumber: true })} />
                        {errors.experience && (
                            <p className="text-red-500 text-sm font-poppins">{errors.experience.message}</p>
                        )}
                    </div>

                    <div className="w-full grid gap-3 items-center mt-4">
                        <label htmlFor="password" className="text-[#333333] font-inter text-sm">Password</label>
                        <div className="relative w-full">
                            <Input
                                type={showPassword1 ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                className="pr-10 font-inter bg-[#F2F2F2]" // leave space for the eye button
                                {...register("password")}
                            />
                            <Button type="button" variant="ghost" className="absolute right-1 top-1/2 
                            -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword1(!showPassword1)}>
                                {showPassword1 ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm font-poppins">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="w-full grid gap-3 items-center mt-4">
                        <label htmlFor="confirmPassword" className="text-[#000000] font-inter text-sm">
                            Confirm Password</label>
                        <div className="relative w-full">
                            <Input
                                type={showPassword2 ? "text" : "password"}
                                id="confirmPassword"
                                placeholder="Again enter your password"
                                className="pr-10 font-inter bg-[#F2F2F2]" // leave space for the button
                                {...register("confirmPassword")}
                            />
                            <Button type="button" variant="ghost" className="absolute right-1 top-1/2 
                            -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword2(!showPassword2)}>
                                {showPassword2 ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm font-poppins">
                                {errors.confirmPassword.message}</p>
                        )}
                    </div>

                    <div className="w-full mt-8">
                        <Button type="submit" className="w-full font-inter cursor-pointer bg-[#235789] text-[#FFFFFF] 
                        hover:scale-105 hover:shadow-lg" disabled={isSubmitting}>
                            {isSubmitting ? "Registering..." : "Register"}
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm pt-6">
                        <p className="text-[#000000] font-inter">Already have an account?</p>
                        <Link href="/sign-in" className="text-blue-700 font-inter font-sm">
                            Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
