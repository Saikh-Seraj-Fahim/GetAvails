"use client"
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const CreateNewPasswordSchema = z.object({
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Password must contain at least one uppercase letter, one lowercase letter and one number"
        ),
    confirmPassword: z.string()
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

// Type inference from schema
type CreateNewPasswordData = z.infer<typeof CreateNewPasswordSchema>;

export default function CreateNewPassword() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm<CreateNewPasswordData>({ // Add type parameter here
        resolver: zodResolver(CreateNewPasswordSchema),
        mode: "onChange", // Add this for immediate validation
        defaultValues: {
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit = async (data: CreateNewPasswordData) => {
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
            {/* <div className="hidden lg:block lg:w-[50%] xl:w-[60%] 2xl:w-[70%] h-full bg-[url(/sign-up-images/stage.png)] bg-cover 
            bg-center" /> */}
            {/* The above will cause hydration error. The below is OK. */}

            <div className="hidden lg:block lg:w-[50%] xl:w-[60%] 2xl:w-[70%] h-full relative">
                <Image src="/sign-up-images/stage.png" alt="background" fill className="object-cover object-center" />
            </div>

            {/* Form */}
            <div className="w-full lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-full flex items-center justify-center bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
                    <div className="w-full flex flex-col gap-6">
                        <Image src="/sign-up-images/logo.svg" alt="logo" width={50} height={50} />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-inter font-semibold text-[#1E1E1E] text-xl">Create New Password</h1>
                            <p className="font-inter text-[#6B7280] text-sm">Your password must be 8-10 character long.</p>
                        </div>
                    </div>

                    <div className="w-full grid gap-3 items-center mt-6">
                        <label htmlFor="password" className="text-[#333333] font-inter text-sm">Password</label>
                        <div className="relative w-full">
                            <Input
                                type={showPassword1 ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                className="pr-10 font-inter bg-[#F2F2F2] text-black" // leave space for the eye button
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
                            <p className="text-red-500 text-sm font-inter">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="w-full grid gap-3 items-center mt-6">
                        <label htmlFor="confirmPassword" className="text-[#000000] font-inter text-sm">
                            Confirm Password</label>
                        <div className="relative w-full">
                            <Input
                                type={showPassword2 ? "text" : "password"}
                                id="confirmPassword"
                                placeholder="Re-type your Password"
                                className="pr-10 font-inter bg-[#F2F2F2] text-black" // leave space for the button
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
                            <p className="text-red-500 text-sm font-inter">
                                {errors.confirmPassword.message}</p>
                        )}
                    </div>

                    <div className="w-full mt-12">
                        <Button type="submit" className="w-full font-inter cursor-pointer bg-[#235789] text-[#FFFFFF] 
                        hover:scale-105 hover:shadow-lg" disabled={isSubmitting}>
                            {isSubmitting ? "Resetting Password..." : "Reset Password"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
