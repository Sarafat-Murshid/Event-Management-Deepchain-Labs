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
        <div
          className="absolute w-[492.69px] h-[601px] bg-white rounded-bl-[4.93px] 
        shadow-[0px_9.85px_19.71px_rgba(0,0,0,0.08)] drop-shadow-[0px_0px_4.93px_rgba(0,0,0,0.04)]"
        >
          <h1 className="text-[29.56px] font-semibold text-[#242565] mt-[38.18px] ml-[29.56px]">
            Sign Up
          </h1>
          <p className="text-[#8570AD] text-[19.7px] font-medium mt-[20px] ml-[29.56px]">
            Already have an account?{" "}
            <button
              variant="link"
              onClick={() => navigate("/signin")}
              className="ml-2 underline text-[#8570AD]"
            >
              Sign In
            </button>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="absolute left-[29.56px] space-y-6"
          >
            <div className="mt-[20px]">
              <label className="block text-[#242565] font-medium text-[19.08px] mb-2">
                Full Name
              </label>
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
              <label className="block text-[#242565] font-medium text-[19.08px] mb-2">
                Email
              </label>
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
              <label className="block text-[#242565] font-medium text-[19.08px] mb-2">
                Password
              </label>
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
              <label className="block text-[#242565] font-medium text-[19.08px] mb-2">
                Confirm Password
              </label>
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
              className="w-[433.56px] h-[49.27px] mt-[30px] rounded-[7.39px] 
              bg-gradient-to-b from-[#7B8BFF] to-[#4157FE] text-white 
              text-[18.91px] font-semibold shadow-[inset_0_-3.62px_1.61px_#4D3DEA,inset_0_3.22px_3.34px_rgba(255,255,255,0.25)]"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
