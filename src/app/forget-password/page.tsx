"use client"
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgetPasswordSchema = z.object({
    emailAddress: z
        .string()
        .email("Invalid email address")
        .toLowerCase()
        .trim(),
});

// Type inference from schema
type ForgetPasswordFormData = z.infer<typeof ForgetPasswordSchema>;

export default function ForgetPassword() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm<ForgetPasswordFormData>({ // Add type parameter here
        resolver: zodResolver(ForgetPasswordSchema),
        mode: "onChange", // Add this for immediate validation
        defaultValues: {
            emailAddress: "",
        }
    });

    const onSubmit = async (data: ForgetPasswordFormData) => {
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
                            <h1 className="font-inter font-semibold text-[#1E1E1E] text-xl">Forget Password</h1>
                            <p className="font-inter text-[#6B7280] text-sm">Please enter your email address to reset your account
                                password.</p>
                        </div>
                    </div>

                    {/* shadcn */}
                    <div className="w-full grid gap-3 items-center mt-12">
                        <label htmlFor="emailAddress" className="font-inter text-sm">Email Address</label>
                        <Input type="text" id="emailAddress" placeholder="Enter Your email "
                            className="font-inter bg-[#F2F2F2] text-black" {...register("emailAddress")} />
                        {errors.emailAddress && (
                            <p className="text-red-500 text-sm font-poppins">{errors.emailAddress.message}</p>
                        )}
                    </div>

                    <div className="w-full mt-8">
                        <Button type="submit" className="w-full font-inter cursor-pointer bg-[#235789] text-[#FFFFFF] 
                        hover:scale-105 hover:shadow-lg" disabled={isSubmitting}>
                            {isSubmitting ? "Sending OTP..." : "Send OTP"}
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm mt-6">
                        <p className="text-[#000000] font-inter">Already have an account?</p>
                        <Link href="/sign-in" className="text-blue-700 font-inter font-sm">
                            Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
