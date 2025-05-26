import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full h-[60px] bg-[#ffffff1a] backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)] flex items-center justify-between px-[102px]">
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

      <div className="flex items-center gap-6">
        <Link to="/signin">
          <Button className="w-[91px] h-[38px] rounded-md shadow-[inset_0px_2.61px_2.71px_#ffffff40,inset_0px_-2.94px_1.31px_#4c3de9] [background:linear-gradient(180deg,rgba(123,139,255,1)_0%,rgba(65,87,254,1)_100%)] [font-family:'Geist',Helvetica] font-semibold text-white text-[15.4px] tracking-[-0.31px] leading-[16.0px]">
            Sign in
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="zw-[91px] h-[38px] rounded-md shadow-[inset_0px_2.61px_2.71px_#ffffff40,inset_0px_-2.94px_1.31px_#4c3de9] [background:linear-gradient(180deg,rgba(123,139,255,1)_0%,rgba(65,87,254,1)_100%)] [font-family:'Geist',Helvetica] font-semibold text-white text-[15.4px] tracking-[-0.31px] leading-[16.0px]">
            Sign up
          </Button>
        </Link>
      </div>
    </header>
  );
};
