import { CalendarIcon } from "../components/icons/CalendarIcon";
import { ClockIcon } from "../components/icons/ClockIcon";
import { MapPinIcon } from "../components/icons/MapPinIcon";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { ChairIcon } from "./icons/ChairIcon";

type Event = {
  id: number;
  title: string;
  date: string;
  time?: string;
  description?: string;
  location: string;
  image?: string;
  tags?: string[]; // or { name: string }[]
  capacity?: number;
  spotsLeft?: number;
};

type Props = {
  event: Event;
  onClick?: () => void;
};

export function EventCard({ event, onClick }: Props) {
  // Date parsing
  const dateObj = new Date(event.date);
  const month = dateObj
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  const day = dateObj.getDate();

  // Tag normalization
  const tags =
    Array.isArray(event.tags) && event.tags.length > 0
      ? event.tags.map((t) =>
          typeof t === "string" ? { name: t, color: "#4157FE" } : t
        )
      : [
          { name: "Tech", color: "#4157FE" },
          { name: "Conference", color: "#4157FE" },
          { name: "AI", color: "#4157FE" },
        ];

  // Spots/capacity fallback
  const spotsLeft =
    typeof event.spotsLeft === "number"
      ? event.spotsLeft
      : event.capacity
      ? Math.max(event.capacity - 80, 0)
      : 20;
  const totalSeats = event.capacity || 100;

  return (
    <Card
      className="w-[400px] shadow-[0px_21.77px_54.43px_#7772aa1a] bg-[url(/body.svg)] bg-[100%_100%] relative cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
      onClick={onClick}
    >
      <div className="relative">
        <img
          className="w-full h-[218px] object-cover"
          alt={event.title}
          src={event.image || "/pic-8.png"}
        />
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-[19px] mt-2">
          {/* Date Badge */}
          <div className="relative w-7 h-[42px] flex-shrink-0">
            <div className="absolute w-[26px] top-0 left-0 font-bold text-[#3d37f1] text-[13px] text-center tracking-[-0.65px] leading-normal [font-family:'Geist',Helvetica]">
              {month}
            </div>
            <div className="absolute w-7 top-3 left-0 font-bold text-black text-[25.9px] tracking-[-1.30px] leading-normal whitespace-nowrap [font-family:'Geist',Helvetica]">
              {day}
            </div>
          </div>
          <h2 className="text-[23.8px] [font-family:'Geist',Helvetica] font-medium text-[#242565] tracking-[-1.19px] leading-[28.6px] whitespace-nowrap [text-shadow:0px_14.58px_11.53px_#8b60dd21]">
            {event.title}
          </h2>
        </div>

        <p className="mt-4 [font-family:'Geist',Helvetica] font-normal text-[#6a6a6a] text-[16.1px] tracking-[-0.80px] leading-[24.1px]">
          {event.description ||
            "We'll get you directly seated and inside for you to enjoy the conference."}
        </p>

        <div className="flex items-center gap-2.5 mt-6">
          <div className="flex items-center gap-[3px]">
            <CalendarIcon className="w-[18px] h-[18px] text-[#6a6a6a]" />
            <span className="[font-family:'Geist',Helvetica] font-normal text-[#6a6a6a] text-[16.1px] tracking-[-0.80px] leading-[24.1px] whitespace-nowrap">
              {dateObj.toLocaleDateString(undefined, { weekday: "long" })}
            </span>
          </div>
          <div className="flex items-center gap-[3px]">
            <ClockIcon className="w-[18.38px] h-[18.38px] text-[#6a6a6a]" />
            <span className="[font-family:'Geist',Helvetica] font-normal text-[#6a6a6a] text-[16.1px] tracking-[-0.80px] leading-[24.1px] whitespace-nowrap">
              {event.time ||
                dateObj.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
            </span>
          </div>
          <div className="flex items-center gap-[3px]">
            <MapPinIcon className="w-[18.38px] h-[18.38px] text-[#6a6a6a]" />
            <span className="[font-family:'Geist',Helvetica] font-normal text-[#6a6a6a] text-[16.1px] tracking-[-0.80px] leading-[24.1px] whitespace-nowrap">
              {event.location}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-[9px] mt-6">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="flex items-center gap-[4.59px] p-[6.89px] bg-[#dadeff] text-blue-700 rounded-[4.59px] font-medium hover:bg-[#dadeff]"
            >
              <div
                className="w-[4.59px] h-[4.59px] rounded-[2.3px]"
                style={{ backgroundColor: tag.color || "#4157FE" }}
              />
              <span className="[font-family:'Geist',Helvetica] text-[13.8px] leading-[16.1px]">
                {tag.name}
              </span>
            </Badge>
          ))}
        </div>

        <Separator className="my-4 bg-gray-200" />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <div className="relative w-[17.89px] h-[17.89px]">
              <ChairIcon />
            </div>
            <span className="[font-family:'Geist',Helvetica] font-medium text-[#8570ad] text-[13.9px] tracking-[-0.70px] leading-[20.9px]">
              {spotsLeft} Spots Left
            </span>
          </div>
          <span className="[font-family:'Geist',Helvetica] font-medium text-[#8570ad] text-[13.9px] tracking-[-0.70px] leading-[20.9px]">
            Total {totalSeats} Seats
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
