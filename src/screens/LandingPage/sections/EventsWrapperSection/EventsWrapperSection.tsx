import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const EventsWrapperSection = (): JSX.Element => {
  const eventData = {
    image: "/pic-8.png",
    date: {
      month: "APR",
      day: "14",
    },
    title: "Tech Conference 2025",
    description:
      "We'll get you directly seated and inside for you to enjoy the conference.",
    details: [
      { icon: <CalendarIcon className="w-[18px] h-[18px]" />, text: "Sunday" },
      { icon: <ClockIcon className="w-[18px] h-[18px]" />, text: "3-5 PM" },
      {
        icon: <MapPinIcon className="w-[18px] h-[18px]" />,
        text: "San Francisco, CA",
      },
    ],
    tags: [{ name: "Tech" }, { name: "Conference" }, { name: "AI" }],
    seats: {
      available: 20,
      total: 100,
    },
  };

  return (
    <Card className="w-[400px] shadow-[0px_21.77px_54.43px_#7772aa1a] bg-[url(/body.svg)] bg-[100%_100%] overflow-hidden">
      <img
        className="w-full h-[218px] object-cover"
        alt="Tech Conference"
        src={eventData.image}
      />

      <CardContent className="p-4">
        <div className="flex items-center gap-[19px] mt-2">
          <div className="w-[31.98px] h-[41.73px]">
            <div className="w-7 h-[42px] relative">
              <div className="absolute w-[26px] top-0 left-0 [font-family:'Geist',Helvetica] font-bold text-[#3d37f1] text-[13px] text-center tracking-[-0.65px] leading-normal">
                {eventData.date.month}
              </div>
              <div className="absolute w-7 top-3 left-0 [font-family:'Geist',Helvetica] font-bold text-black text-[25.9px] tracking-[-1.30px] leading-normal whitespace-nowrap">
                {eventData.date.day}
              </div>
            </div>
          </div>

          <h3 className="w-[269.62px] h-[24.85px] [text-shadow:0px_14.58px_11.53px_#8b60dd21] [font-family:'Geist',Helvetica] font-medium text-[#242565] text-[23.8px] tracking-[-1.19px] leading-[28.6px] whitespace-nowrap">
            {eventData.title}
          </h3>
        </div>

        <p className="mt-4 [font-family:'Geist',Helvetica] font-normal text-[#6a6a6a] text-[16.1px] tracking-[-0.80px] leading-[24.1px]">
          {eventData.description}
        </p>

        <div className="flex flex-wrap items-center gap-2.5 mt-6">
          {eventData.details.map((detail, index) => (
            <div key={index} className="flex items-center gap-[3px]">
              {detail.icon}
              <span className="[font-family:'Geist',Helvetica] font-normal text-[#6a6a6a] text-[16.1px] tracking-[-0.80px] leading-[24.1px] whitespace-nowrap">
                {detail.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[9px] mt-6">
          {eventData.tags.map((tag, index) => (
            <Badge
              key={index}
              className="flex items-center gap-[4.59px] p-[6.89px] bg-[#dadeff] text-blue-700 rounded-[4.59px] font-medium hover:bg-[#dadeff]"
            >
              <div className="w-[4.59px] h-[4.59px] bg-blue-700 rounded-[2.3px]" />
              <span className="[font-family:'Geist',Helvetica] text-[13.8px] leading-[16.1px]">
                {tag.name}
              </span>
            </Badge>
          ))}
        </div>

        <Separator className="mt-6 mb-3" />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <div className="relative w-[17.89px] h-[17.89px]">
              <img
                className="absolute w-3 h-[15px] top-px left-[3px]"
                alt="Group"
                src="/group-1.png"
              />
            </div>
            <span className="[font-family:'Geist',Helvetica] font-medium text-[#8570ad] text-[13.9px] tracking-[-0.70px] leading-[20.9px] whitespace-nowrap">
              {eventData.seats.available} Spots Left
            </span>
          </div>

          <span className="[font-family:'Geist',Helvetica] font-medium text-[#8570ad] text-[13.9px] tracking-[-0.70px] leading-[20.9px] whitespace-nowrap">
            Total {eventData.seats.total} Seats
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
