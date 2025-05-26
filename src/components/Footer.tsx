import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const scrollAndNavigate = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <footer className="w-full h-[167px] bg-[#ECEEFF] flex flex-col justify-center items-center mt-auto">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center mb-6">
          {/* Logo and brand name */}
          <div className="flex items-center gap-2">
            <img
              className="w-[27px] h-[27px]"
              alt="Ticket icon"
              src="/vuesax-bold-ticket-2.svg"
            />
            <span className="text-[27px] font-bold text-[#240a62]">
              Event buddy.
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            <button onClick={() => navigate("/")} className="text-[#2c2575]">
              Home
            </button>
            <button
              onClick={() => scrollAndNavigate("/signin")}
              className="text-[#2c2575]"
            >
              Sign in
            </button>
            <button
              onClick={() => scrollAndNavigate("/signup")}
              className="text-[#2c2575]"
            >
              Sign up
            </button>
            <button className="text-[#2c2575]">Privacy Policy</button>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#6a6a6a]">
          © 2025 Event buddy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
