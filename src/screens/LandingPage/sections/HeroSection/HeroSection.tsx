import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[613px] bg-white overflow-hidden">
      <div className="relative w-full h-full max-w-[2412px] mx-auto">
        {/* Background elements */}
        <div className="absolute w-full h-[1167px] top-[292px] left-1/2 -translate-x-1/2 opacity-70">
          <div className="relative h-[1069px] top-[-60px]">
            <div className="absolute w-[1814px] h-[405px] top-[255px] left-[22px] bg-[#4157fe] rounded-[906.81px/202.74px] rotate-[-12.71deg] blur-[308.42px]" />
            <div className="absolute w-[1365px] h-[477px] top-[352px] left-[1008px] bg-[#4157fe] rounded-[682.31px/238.45px] rotate-[-22.16deg] blur-[229.24px]" />
            <img
              className="absolute w-[1440px] h-[307px] top-0 left-1/2 -translate-x-1/4"
              alt="Mask group"
              src="/mask-group.png"
            />
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute w-[790px] h-[790px] top-[315px] right-[294px] rounded-[395.18px] border-[0.95px] border-solid border-white" />
        <div className="absolute w-[1075px] h-[1075px] top-[173px] right-[361px] rounded-[537.67px] border-[0.95px] border-solid border-[#ffffffcc]" />
        <div className="absolute w-[1421px] h-[1421px] top-0 right-[216px] rounded-[710.56px] border-[0.95px] border-solid border-[#ffffff99]" />

        {/* Decorative elements */}
        <img
          className="absolute w-[142px] h-[142px] top-[313px] left-[111px]"
          alt="Group"
          src="/group-1000011118.png"
        />
        <img
          className="absolute w-[142px] h-[142px] top-[313px] right-[111px]"
          alt="Group"
          src="/group-1000011119.png"
        />

        {/* Main content */}
        <div className="absolute top-[116px] left-1/2 -translate-x-1/2 flex flex-col items-center max-w-[849px] text-center">
          <h1 className="text-[78.5px] tracking-[-3.93px] leading-[78.5px] font-medium text-[#240a62] [text-shadow:0px_12.69px_10.03px_#8b60dd21] [font-family:'Geist',Helvetica]">
            Discover
          </h1>
          <h2 className="text-[78.5px] tracking-[-3.93px] leading-[78.5px] font-normal [font-family:'Geist',Helvetica]">
            <span className="font-medium text-[#4157fe] tracking-[-3.08px]">
              Amazing
            </span>
            <span className="font-medium text-[#240a62] tracking-[-3.08px]">
              {" "}
              Events
            </span>
          </h2>
          <p className="mt-6 [font-family:'Geist',Helvetica] font-normal text-[#250a63] text-[20.3px] tracking-[-0.41px] leading-[26.5px]">
            Find and book events that match your interests. From tech
            conferences to music festivals, we've got you covered.
          </p>

          <h3 className="mt-10 [font-family:'Geist',Helvetica] font-semibold text-[#250a63] text-[20.3px] tracking-[-0.41px] leading-[26.5px]">
            Find Your Next Event
          </h3>

          <div className="flex items-center gap-3.5 mt-5">
            <div className="relative flex items-center">
              <SearchIcon className="absolute left-5 w-6 h-6 text-[#391d7999]" />
              <Input
                className="w-[346px] h-[54px] pl-12 pr-5 py-[20.95px] bg-[#ffffff70] rounded-lg border border-solid border-[#bdbbfb] shadow-[2.72px_22.12px_52.89px_#5d48ec26] backdrop-blur-[3.45px] [font-family:'Geist',Helvetica] font-medium text-[#391d7999] text-base tracking-[-0.32px]"
                placeholder="Search events"
              />
            </div>
            <Button className="h-[54px] px-[34.5px] py-[18.12px] rounded-lg shadow-[inset_0px_1.39px_3.14px_#ffffffde,1.16px_10.48px_11.79px_#5d48ec1c] [background:linear-gradient(180deg,rgba(123,139,255,1)_0%,rgba(65,87,254,1)_100%)] [font-family:'Geist',Helvetica] font-semibold text-white text-[17.2px] tracking-[-0.34px]">
              Search Events
            </Button>
          </div>
        </div>

        {/* Decorative ticket 1 */}
        <div className="absolute w-[225px] h-[101px] top-[158px] left-[111px] rotate-[-11.35deg] shadow-[0px_9.38px_18.76px_#00000014,0px_0px_4.69px_#0000000a]">
          <div className="relative w-[262px] h-[187px] top-[-43px] left-[-19px]">
            <img
              className="absolute w-[239px] h-[143px] top-[22px] left-3 rotate-[11.35deg]"
              alt="Vector"
              src="/vector.svg"
            />
            <div className="flex w-[60px] h-[17px] items-center gap-[4.65px] absolute top-[119px] left-[145px]">
              <img
                className="relative w-[20.09px] h-[20.09px] mt-[-1.51px] mb-[-1.51px] ml-[-1.51px] rotate-[11.35deg]"
                alt="Ic round star"
                src="/ic-round-star.svg"
              />
              <img
                className="relative w-[20.09px] h-[20.09px] mt-[-1.51px] mb-[-1.51px] rotate-[11.35deg]"
                alt="Ic round star"
                src="/ic-round-star.svg"
              />
              <img
                className="relative w-[20.09px] h-[20.09px] mt-[-1.51px] mb-[-1.51px] mr-[-1.51px] rotate-[11.35deg]"
                alt="Ic round star"
                src="/ic-round-star.svg"
              />
            </div>
            <div className="flex w-[54px] h-2 items-center justify-center gap-[2.33px] absolute top-[55px] left-[114px]">
              <img
                className="relative w-[9.13px] h-[9.13px] mt-[-0.69px] mb-[-0.69px] ml-[-0.47px] rotate-[11.35deg]"
                alt="Vuesax bold ticket"
                src="/vuesax-bold-ticket-2-1.svg"
              />
              <div className="relative w-fit mt-[-0.51px] [text-shadow:0px_1.12px_0.88px_#8b60dd21] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-[7.8px] tracking-[-0.39px] leading-[7.8px] whitespace-nowrap">
                Event buddy.
              </div>
            </div>
            <div className="absolute top-[86px] left-[114px] [text-shadow:0px_2.01px_1.59px_#8b60dd21] [font-family:'JetBrains_Mono',Helvetica] font-bold text-white text-[15.5px] tracking-[-0.78px] leading-[15.5px] whitespace-nowrap">
              ONE WAY TICKET
            </div>
            <img
              className="absolute w-16 h-16 top-[61px] left-[29px] rotate-[11.35deg]"
              alt="Qr code"
              src="/qr-code.svg"
            />
            <img
              className="absolute w-[117px] h-[25px] top-16 left-[115px] rotate-[11.35deg]"
              alt="Line"
              src="/line-21.svg"
            />
            <img
              className="absolute w-[117px] h-[25px] top-[98px] left-[115px] rotate-[11.35deg]"
              alt="Line"
              src="/line-22.svg"
            />
          </div>
        </div>

        {/* Decorative ticket 2 */}
        <div className="absolute w-[199px] h-[89px] top-[158px] right-[111px] rotate-[20.67deg] shadow-[0px_8px_16px_#00000014,0px_0px_4px_#0000000a]">
          <div className="relative w-64 h-[219px] top-[-65px] left-[-29px]">
            <img
              className="absolute w-[216px] h-[153px] top-[33px] left-5 rotate-[-20.67deg]"
              alt="Vector"
              src="/vector-1.svg"
            />
            <div className="flex w-[53px] h-[15px] items-center gap-[4.11px] absolute top-[132px] left-[140px]">
              <img
                className="relative w-[19.41px] h-[19.41px] mt-[-2.17px] mb-[-2.17px] ml-[-2.17px] rotate-[-20.67deg]"
                alt="Ic round star"
                src="/ic-round-star-1.svg"
              />
              <img
                className="relative w-[19.41px] h-[19.41px] mt-[-2.17px] mb-[-2.17px] rotate-[-20.67deg]"
                alt="Ic round star"
                src="/ic-round-star-1.svg"
              />
              <img
                className="relative w-[19.41px] h-[19.41px] mt-[-2.17px] mb-[-2.17px] mr-[-2.17px] rotate-[-20.67deg]"
                alt="Ic round star"
                src="/ic-round-star-2.svg"
              />
            </div>
            <div className="flex w-[47px] h-[7px] gap-[2.05px] top-[76px] left-[113px] items-center justify-center absolute">
              <img
                className="relative w-[8.82px] h-[8.82px] mt-[-0.99px] mb-[-0.99px] ml-[-0.82px] rotate-[-20.67deg]"
                alt="Vuesax bold ticket"
                src="/vuesax-bold-ticket-2-2.svg"
              />
              <div className="mt-[-0.42px] [text-shadow:0px_0.99px_0.78px_#8b60dd21] text-[6.8px] tracking-[-0.34px] leading-[6.8px] relative w-fit [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#240a62] whitespace-nowrap">
                Event buddy.
              </div>
            </div>
            <div className="absolute top-[103px] left-[113px] [text-shadow:0px_1.78px_1.41px_#8b60dd21] [font-family:'JetBrains_Mono',Helvetica] font-bold text-[#240a62] text-[13.7px] tracking-[-0.68px] leading-[13.7px] whitespace-nowrap">
              ONE WAY TICKET
            </div>
            <img
              className="absolute w-[61px] h-[61px] top-[79px] left-9 rotate-[-20.67deg]"
              alt="Qr code"
              src="/qr-code-1.svg"
            />
            <img
              className="absolute w-[99px] h-[38px] top-[75px] left-[116px] rotate-[-20.67deg]"
              alt="Line"
              src="/line-21-1.svg"
            />
            <img
              className="absolute w-[99px] h-[38px] top-[105px] left-[116px] rotate-[-20.67deg]"
              alt="Line"
              src="/line-21-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
