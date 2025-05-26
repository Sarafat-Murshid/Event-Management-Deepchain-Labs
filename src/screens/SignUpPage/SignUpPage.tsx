import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { useAuth } from "../../contexts/AuthContext";
import { LogoHeader } from "../../components/LogoHeader";

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
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
      <div className="min-h-screen bg-[#ECEEFF] flex items-center justify-center relative pb-[167px]">
        <svg
          width={493}
          height={601}
          viewBox="0 0 493 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            filter:
              "drop-shadow(0px 0px 4.93px rgba(0,0,0,0.04)) drop-shadow(0px 9.85px 19.71px rgba(0,0,0,0.08))",
          }}
        >
          <defs>
            <clipPath id="signup-clip">
              <path
                d="M493 580.79L472.79 601H4C1.79086 601 0 599.209 0 597V20.6904L20.6914 0H493V580.79Z"
                fill="white"
              />
            </clipPath>
          </defs>
          <foreignObject
            x="0"
            y="0"
            width="493"
            height="601"
            clipPath="url(#signup-clip)"
          >
            <div
              style={{
                position: "relative",
                width: "492.69px",
                height: "601px",
                background: "#fff",
                borderRadius: "0px 0px 0px 4.93px",
                overflow: "hidden",
                fontFamily: "Geist, Inter, sans-serif",
              }}
            >
              <h1
                style={{
                  position: "absolute",
                  left: "29.56px",
                  top: "38.18px",
                  fontWeight: 600,
                  fontSize: "29.56px",
                  lineHeight: "100%",
                  letterSpacing: "-0.05em",
                  color: "#242565",
                  width: "102.23px",
                  height: "30px",
                }}
              >
                Sign Up
              </h1>
              <div
                style={{
                  position: "absolute",
                  left: "29.56px",
                  top: "97.31px",
                  width: "auto",
                  height: "28px",
                  fontWeight: 500,
                  fontSize: "19.71px",
                  lineHeight: "140%",
                  letterSpacing: "-0.05em",
                  color: "#8570AD",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  gap: "10px",
                }}
              >
                <span>Already have an account?</span>
                <button
                  type="button"
                  onClick={() => navigate("/signin")}
                  style={{
                    textDecoration: "underline",
                    color: "#8570AD",
                    fontWeight: 500,
                    fontSize: "19.71px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Sign In
                </button>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "140px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "24px",
                  paddingLeft: "29.56px",
                  paddingRight: "29.56px",
                }}
              >
                <div style={{ width: "433.56px" }}>
                  <label
                    style={{
                      fontWeight: 500,
                      fontSize: "19.08px",
                      letterSpacing: "-0.05em",
                      color: "#242565",
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    Full Name
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="Full Name"
                    className="w-[433.56px] h-[49.56px] px-[19.71px] py-[14.78px] border border-[#D9D9D9] rounded-[9.54px] text-[#B3B3B3] text-[16px]"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div style={{ width: "433.56px" }}>
                  <label
                    style={{
                      fontWeight: 500,
                      fontSize: "19.08px",
                      letterSpacing: "-0.05em",
                      color: "#242565",
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    Email
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className="w-[433.56px] h-[49.56px] px-[19.71px] py-[14.78px] border border-[#D9D9D9] rounded-[9.54px] text-[#B3B3B3] text-[16px]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div style={{ width: "433.56px" }}>
                  <label
                    style={{
                      fontWeight: 500,
                      fontSize: "19.08px",
                      letterSpacing: "-0.05em",
                      color: "#242565",
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    Password
                  </label>
                  <Input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    className="w-[433.56px] h-[49.56px] px-[19.71px] py-[14.78px] border border-[#D9D9D9] rounded-[9.54px] text-[#B3B3B3] text-[16px]"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  style={{
                    width: "433.56px",
                    height: "49.27px",
                    background:
                      "linear-gradient(180deg, #7B8BFF 0%, #4157FE 100%)",
                    boxShadow:
                      "inset 0px -3.62px 1.61px #4D3DEA, inset 0px 3.22px 3.34px rgba(255,255,255,0.25)",
                    borderRadius: "7.39px",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "18.91px",
                    letterSpacing: "-0.02em",
                    lineHeight: "104.3%",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};
