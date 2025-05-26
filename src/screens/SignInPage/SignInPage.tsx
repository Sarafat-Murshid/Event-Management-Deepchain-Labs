import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useAuth } from "../../contexts/AuthContext";
import { LogoHeader } from "../../components/LogoHeader";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export const SignInPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    // Hardcoded admin credentials
    if (data.email === "admin@event.com" && data.password === "admin123") {
      // Set admin flag in your auth context or localStorage
      localStorage.setItem("isAdmin", "true");
      navigate("/admin-dashboard");
      return;
    }

    try {
      await login(data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <LogoHeader />
      <div className="min-h-screen bg-[#f9faff] flex items-center justify-center relative pb-[167px]">
        <div className="w-full max-w-[400px] p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-[#242565] mb-6">Sign In</h1>
          <p className="my-4 text-left text-[#6a6a6a]">
            New User?{" "}
            <Button
              variant="link"
              onClick={() => navigate("/signup")}
              className="text-[#4157fe] p-0"
            >
              Create an account
            </Button>
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            <Button
              type="submit"
              className="w-full bg-[#4157fe] hover:bg-[#3a4ee6] text-white"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
