import { TicketIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const PreviousEventsSection = (): JSX.Element => {
  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Sign in", href: "#" },
    { title: "Sign up", href: "#" },
    { title: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#eceeff] py-8 px-6">
      <div className="container mx-auto max-w-[1226px]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <TicketIcon className="w-7 h-7" />
            <div className="[text-shadow:0px_4.04px_3.19px_#8b60dd21] text-[28px] tracking-[-1.40px] leading-7 [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#240a62]">
              Event buddy.
            </div>
          </div>

          <nav className="flex items-center gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Geist',Helvetica] font-medium text-[#2c2575] text-sm tracking-[-0.70px] leading-[14.6px]"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="bg-gray-300 my-4" />

        <div className="text-center mt-6">
          <p className="[font-family:'Geist',Helvetica] font-medium text-[#6a6a6a] text-sm tracking-[-0.70px] leading-[14.6px]">
            © 2025 Event buddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
