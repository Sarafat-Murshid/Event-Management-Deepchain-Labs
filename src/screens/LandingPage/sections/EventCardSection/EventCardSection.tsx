import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { ChairIcon } from './../../../../components/icons/ChairIcon';

export const EventCardSection = (): JSX.Element => {
  const navigate = useNavigate();

  // Event tags data
  const tags = [
    { name: "Tech", color: "blue-700" },
    { name: "Conference", color: "blue-700" },
    { name: "AI", color: "blue-700" },
  ];

  // Event details data
  const eventDetails = [
    { icon: <CalendarIcon className="w-[18px] h-[18px]" />, text: "Sunday" },
    { icon: <ClockIcon className="w-[18px] h-[18px]" />, text: "3-5 PM" },
    {
      icon: <MapPinIcon className="w-[18px] h-[18px]" />,
      text: "San Francisco, CA",
    },
  ];

  return (
    <Card
      className="w-[400px] shadow-[0px_21.77px_54.43px_#7772aa1a] bg-[url(/body.svg)] bg-[100%_100%] relative cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => navigate(`/event/1`)}
    >
      <div className="relative">
        <img
          className="w-full h-[218px] object-cover"
          alt="Tech Conference"
          src="/pic-8.png"
        />
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-[19px] mt-2">
          <div className="relative w-[31.98px] h-[41.73px]">
            <div className="relative w-7 h-[42px]">
              <div className="absolute w-[26px] top-0 left-0 font-bold text-[#3d37f1] text-[13px] text-center tracking-[-0.65px] leading-normal">
                APR
              </div>
              <div className="absolute w-7 top-3 left-0 font-bold text-black text-[25.9px] tracking-[-1.30px] leading-normal whitespace-nowrap">
                14
              </div>
            </div>
          </div>

          <h2 className="text-[23.8px] font-medium text-[#242565] tracking-[-1.19px] leading-[28.6px] whitespace-nowrap [text-shadow:0px_14.58px_11.53px_#8b60dd21]">
            Tech Conference 2025
          </h2>
        </div>

        <p className="mt-4 text-[16.1px] text-[#6a6a6a] tracking-[-0.80px] leading-[24.1px]">
          We&apos;ll get you directly seated and inside for you to enjoy the
          conference.
        </p>

        <div className="flex items-center gap-2.5 mt-6">
          {eventDetails.map((detail, index) => (
            <div key={index} className="flex items-center gap-[3px]">
              {detail.icon}
              <span className="text-[16.1px] text-[#6a6a6a] tracking-[-0.80px] leading-[24.1px]">
                {detail.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-[9px] mt-6">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-[#dadeff] text-blue-700 font-medium text-[13.8px] h-[24.85px] px-[6.89px] rounded-[4.59px] flex items-center gap-[4.59px]"
            >
              <div
                className={`w-[4.59px] h-[4.59px] bg-${tag.color} rounded-[2.3px]`}
              />
              {tag.name}
            </Badge>
          ))}
        </div>

        <Separator className="my-4 bg-gray-200" />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <div className="relative w-[17.89px] h-[17.89px] flex items-center justify-center">
              <ChairIcon className="w-3 h-[15px]" />
            </div>
            <span className="font-medium text-[13.9px] text-[#8570ad] tracking-[-0.70px] leading-[20.9px]">
              20 Spots Left
            </span>
          </div>
          <span className="font-medium text-[13.9px] text-[#8570ad] tracking-[-0.70px] leading-[20.9px]">
            Total 100 Seats
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
