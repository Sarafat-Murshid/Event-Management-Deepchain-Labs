import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useAuth } from "../../contexts/AuthContext";
import { LogoHeader } from "../../components/LogoHeader";

const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

export const SignUpPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await signup(data.email, data.password, data.name);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <LogoHeader />
      <div className="min-h-screen bg-[#f9faff] flex items-center justify-center relative pb-[167px]">
        <div className="w-full max-w-[400px] p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-[#242565] mb-6">Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register("name")}
                placeholder="Full Name"
                className="w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <Input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
                className="w-full"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#4157fe] hover:bg-[#3a4ee6] text-white"
            >
              Sign Up
            </Button>
          </form>

          <p className="mt-4 text-center text-[#6a6a6a]">
            Already have an account?{" "}
            <Button
              variant="link"
              onClick={() => navigate("/signin")}
              className="text-[#4157fe] p-0"
            >
              Sign In
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};
