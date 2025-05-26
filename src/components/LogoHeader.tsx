import React from "react";
import { Link } from "react-router-dom";

export const LogoHeader = () => (
  <header className="w-full h-[60px] bg-[#ffffff1a] backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)] flex items-center px-[102px]">
    <Link to="/" className="flex items-center gap-[8.09px]">
      <img
        className="w-[26.96px] h-[26.96px]"
        alt="Ticket icon"
        src="/vuesax-bold-ticket-2.svg"
      />
      <div className="[text-shadow:0px_3.89px_3.07px_#8b60dd21] text-[27px] tracking-[-1.35px] leading-[27px] font-gilroy font-bold text-[#240a62] whitespace-nowrap">
        Event buddy.
      </div>
    </Link>
  </header>
);
