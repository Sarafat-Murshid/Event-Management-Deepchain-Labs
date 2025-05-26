
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
        <div
          className="absolute w-[492.69px] h-[486.53px] bg-white rounded-bl-[4.93px] 
        shadow-[0px_9.85px_19.71px_rgba(0,0,0,0.08)] drop-shadow-[0px_0px_4.93px_rgba(0,0,0,0.04)]"
        >
          <h1 className="text-[29.56px] font-semibold text-[#242565] mt-[38.18px] ml-[29.56px]">
            Sign in
          </h1>
          <p className="text-[#8570AD] text-[19.7px] font-medium mt-[20px] ml-[29.56px]">
            New User?
            <button
              onClick={() => navigate("/signup")}
              className="ml-2 underline text-[#8570AD]"
            >
              Create an account
            </button>
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="absolute left-[29.56px] space-y-6"
          >
            <div className="mt-[20px]">
              <label className="block text-[#242565] font-medium text-[19.08px] mb-2">
                Email
              </label>
              <Input
                {...register("email")}
                type="email"
                placeholder="enter your email"
                className="w-[433.56px] h-[49.56px] px-[19.71px] py-[14.78px] border border-[#D9D9D9] 
                rounded-[9.54px] text-[#B3B3B3] text-[16px]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-[30px]">
              <label className="block text-[#242565] font-medium text-[19.08px] mb-2">
                Password
              </label>
              <Input
                {...register("password")}
                type="password"
                placeholder="enter your password"
                className="w-[433.56px] h-[49.56px] px-[19.71px] py-[14.78px] border border-[#D9D9D9] 
                rounded-[9.54px] text-[#B3B3B3] text-[16px]"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-[433.56px] h-[49.27px] mt-[30px] rounded-[7.39px] 
            bg-gradient-to-b from-[#7B8BFF] to-[#4157FE] text-white 
            text-[18.91px] font-semibold shadow-[inset_0_-3.62px_1.61px_#4D3DEA,inset_0_3.22px_3.34px_rgba(255,255,255,0.25)]"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
