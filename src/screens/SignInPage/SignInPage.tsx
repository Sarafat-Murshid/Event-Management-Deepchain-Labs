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
    if (data.email === "admin@event.com" && data.password === "admin123") {
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
      <div className="min-h-screen bg-[#ECEEFF] flex items-center justify-center relative pb-[167px]">
        <svg
          width={490}
          height={520}
          viewBox="0 0 490 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shadow-[0px_9.85px_19.71px_rgba(0,0,0,0.08)] drop-shadow-[0px_0px_4.93px_rgba(0,0,0,0.04)]"
        >
          <path
            d="M490 499.79L469.79 520H4C1.79086 520 0 518.209 0 516V20.6904L20.6914 0H490V499.79Z"
            fill="white"
          />
          <foreignObject x="0" y="0" width="490" height="520">
            <div className="flex flex-col h-full w-full">
              <div
                style={{
                  fontFamily: "Geist, Inter, sans-serif",
                  marginTop: "48px", 
                }}
              >
                <h1
                  style={{
                    fontWeight: 600,
                    fontSize: "29.56px",
                    lineHeight: "100%",
                    letterSpacing: "-0.05em",
                    color: "#242565",
                  }}
                  className="mt-[38.18px] ml-[29.56px]"
                >
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
                  className="space-y-6 mt-4 ml-[29.56px]"
                >
                  <div className="mt-[20px]">
                    <label
                      style={{
                        fontWeight: 500,
                        fontSize: "19.08px",
                        letterSpacing: "-0.05em",
                        color: "#242565",
                        marginBottom: "8px",
                        display: "block",
                      }}
                      className="block text-[#242565] font-medium text-[19.08px] mb-2"
                    >
                      Email
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="Enter your email"
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
                    <label
                      style={{
                        fontWeight: 500,
                        fontSize: "19.08px",
                        letterSpacing: "-0.05em",
                        color: "#242565",
                        marginBottom: "8px",
                        display: "block",
                      }}
                      className="block text-[#242565] font-medium text-[19.08px] mb-2"
                    >
                      Password
                    </label>
                    <Input
                      {...register("password")}
                      type="password"
                      placeholder="Enter your password"
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
                    style={{
                      fontWeight: 600,
                      fontSize: "18.91px",
                      letterSpacing: "-0.02em",
                      fontFamily: "Geist, Inter, sans-serif",
                    }}
                  >
                    Sign In
                  </Button>
                </form>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};
