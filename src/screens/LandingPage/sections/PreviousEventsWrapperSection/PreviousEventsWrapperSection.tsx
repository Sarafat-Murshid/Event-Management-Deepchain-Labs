import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const PreviousEventsWrapperSection = (): JSX.Element => {
  const eventData = {
    image: "/pic-8.png",
    date: {
      month: "APR",
      day: "14",
    },
    title: "Tech Conference 2025",
    description:
      "We'll get you directly seated and inside for you to enjoy the conference.",
    details: {
      day: "Sunday",
      time: "3-5 PM",
      location: "San Francisco, CA",
    },
    tags: ["Tech", "Conference", "AI"],
    capacity: {
      total: 100,
      left: 20,
    },
  };

  return (
    <Card className="w-[400px] shadow-[0px_21.77px_54.43px_#7772aa1a] bg-[url(/body.svg)] bg-[100%_100%] overflow-hidden">
      <img
        className="w-full h-[218px] object-cover"
        alt="Conference"
        src={eventData.image}
      />

      <CardContent className="p-4">
        <div className="flex items-center gap-[19px] mt-2">
          <div className="w-[31.98px] h-[41.73px]">
            <div className="w-7 h-[42px] relative">
              <div className="absolute w-[26px] top-0 left-0 font-bold text-[#3d37f1] text-[13px] text-center tracking-[-0.65px]">
                {eventData.date.month}
              </div>
              <div className="absolute w-7 top-3 left-0 font-bold text-black text-[25.9px] tracking-[-1.30px] whitespace-nowrap">
                {eventData.date.day}
              </div>
            </div>
          </div>

          <h3 className="text-[23.8px] font-medium text-[#242565] tracking-[-1.19px] leading-[28.6px] whitespace-nowrap [text-shadow:0px_14.58px_11.53px_#8b60dd21]">
            {eventData.title}
          </h3>
        </div>

        <p className="mt-3 text-[16.1px] font-normal text-[#6a6a6a] tracking-[-0.80px] leading-[24.1px]">
          {eventData.description}
        </p>

        <div className="flex items-center gap-2.5 mt-4">
          <div className="flex items-center gap-[3px]">
            <CalendarIcon className="w-[18px] h-[18px] text-[#6a6a6a]" />
            <span className="text-[16.1px] font-normal text-[#6a6a6a] tracking-[-0.80px] leading-[24.1px]">
              {eventData.details.day}
            </span>
          </div>

          <div className="flex items-center gap-[3px]">
            <ClockIcon className="w-[18.38px] h-[18.38px] text-[#6a6a6a]" />
            <span className="text-[16.1px] font-normal text-[#6a6a6a] tracking-[-0.80px] leading-[24.1px]">
              {eventData.details.time}
            </span>
          </div>

          <div className="flex items-center gap-[3px]">
            <MapPinIcon className="w-[18.38px] h-[18.38px] text-[#6a6a6a]" />
            <span className="text-[16.1px] font-normal text-[#6a6a6a] tracking-[-0.80px] leading-[24.1px]">
              {eventData.details.location}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[9px] mt-4">
          {eventData.tags.map((tag, index) => (
            <Badge
              key={index}
              className="flex items-center gap-[4.59px] p-[6.89px] bg-[#dadeff] text-blue-700 rounded-[4.59px] font-medium"
            >
              <div className="w-[4.59px] h-[4.59px] bg-blue-700 rounded-[2.3px]" />
              <span className="text-[13.8px] tracking-[0] leading-[16.1px]">
                {tag}
              </span>
            </Badge>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <div className="relative w-[17.89px] h-[17.89px]">
              <img
                className="absolute w-3 h-[15px] top-px left-[3px]"
                alt="UserIcon icon"
                src="/group.png"
              />
            </div>
            <span className="font-medium text-[#8570ad] text-[13.9px] tracking-[-0.70px] leading-[20.9px]">
              {eventData.capacity.left} Spots Left
            </span>
          </div>

          <span className="font-medium text-[#8570ad] text-[13.9px] tracking-[-0.70px] leading-[20.9px]">
            Total {eventData.capacity.total} Seats
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
