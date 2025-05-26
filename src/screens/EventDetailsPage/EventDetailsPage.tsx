import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEventContext } from "../../contexts/EventContext";
import { CalendarIcon } from "../../components/icons/CalendarIcon";
import { ClockIcon } from "../../components/icons/ClockIcon";
import { MapPinIcon } from "../../components/icons/MapPinIcon";
import { HeaderSection } from "../LandingPage/sections/HeaderSection/HeaderSection";
import { Footer } from "../../components/Footer";
import { ChairIcon } from "../../components/icons/ChairIcon";
import { TicketIcon } from "../../components/icons/TicketIcon";
import type { Event } from "../../types/Event"; // <-- Import the global type

export const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { events } = useEventContext();
  const event: Event | undefined = events.find(
    (e: Event) => e.id === Number(id)
  );
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState(1);

  if (!event) {
    return (
      <div className="p-8 text-center text-gray-500">
        Event not found.
        <button className="ml-4 underline" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  const dateObj = new Date(event.date);

  const tags =
    Array.isArray(event.tags) && event.tags.length > 0
      ? event.tags.map((t) =>
          typeof t === "string"
            ? { name: t, color: "#4157FE" }
            : { name: t.name, color: t.color ?? "#4157FE" }
        )
      : [
          { name: "Tech", color: "#4157FE" },
          { name: "Conference", color: "#4157FE" },
          { name: "AI", color: "#4157FE" },
        ];

  const eventImage =
    event.imageUrl ||
    event.image ||
    "https://via.placeholder.com/1232x585?text=No+Image";

  return (
    <div className="min-h-screen flex flex-col bg-[#f9faff]">
      <HeaderSection />

      <main className="flex-1 flex flex-col items-center justify-start w-full">
        <div className="relative w-full max-w-[1440px] min-h-[2056px] mx-auto">
          <div
            className="absolute left-[105px] top-[88px] flex items-end gap-2 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7963 25.7007C20.1459 25.7007 25.2932 20.5533 25.2932 14.2038C25.2932 7.85419 20.1459 2.70685 13.7963 2.70685C7.44674 2.70685 2.29939 7.85419 2.29939 14.2038C2.29939 20.5533 7.44674 25.7007 13.7963 25.7007Z"
                stroke="#242565"
                strokeWidth="2.06944"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.8202 14.2037H10.9221"
                stroke="#242565"
                strokeWidth="2.06944"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.2214 10.7546L9.77237 14.2037L13.2214 17.6528"
                stroke="#242565"
                strokeWidth="2.06944"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="font-geist font-medium text-[19px] leading-[29px] text-[#242565]">
              Back to event
            </span>
          </div>

          <div
            className="absolute left-[104px] top-[136px] w-[1232px] h-[585px] rounded-[8px] overflow-hidden bg-white"
            style={{
              background: `url(${eventImage}) center center/cover no-repeat, #fff`,
            }}
          >
            {eventImage && (
              <img
                src={eventImage}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {tags.length > 0 && (
            <div className="absolute flex flex-row gap-[9px] left-[104px] top-[753px] z-10">
              {tags.map((tag, idx) => (
                <div
                  key={tag.name + idx}
                  className="flex flex-row items-center px-[7px] gap-[5px] bg-[#DADEFF] rounded-[5px] h-[25px]"
                  style={{
                    minWidth: 35,
                    maxWidth: 98,
                  }}
                >
                  <span
                    className="inline-block rounded-full"
                    style={{
                      width: 5,
                      height: 5,
                      background: tag.color || "#4157FE",
                    }}
                  />
                  <span className="font-geist font-medium text-[14px] leading-[16px] text-[#1D4ED8]">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
          )}

          <h1 className="absolute left-[104px] top-[806px] font-geist font-medium text-[36px] leading-[43px] tracking-[-0.05em] text-[#242565]">
            {event.title}
          </h1>

          <div className="absolute left-[104px] top-[878px] w-[1232px] h-[87px] bg-white border border-[rgba(189,187,251,0.35)] rounded-[12px] flex flex-row items-center">
            <div className="flex flex-row items-center gap-[12px] ml-[28px] w-[205px] h-[48px]">
              <div className="flex items-center justify-center w-[44px] h-[44px]">
                <CalendarIcon className="w-[44px] h-[44px] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="font-geist text-[#6A6A6A] text-[16px] leading-[24px] font-normal">
                  Date
                </div>
                <div className="font-geist text-[#8570AD] text-[16px] leading-[24px] font-medium">
                  {dateObj.toLocaleDateString(undefined, {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[12px] mx-auto w-[172px] h-[48px]">
              <div className="flex items-center justify-center w-[34px] h-[34px]">
                <ClockIcon className="w-[34px] h-[34px] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="font-geist text-[#6A6A6A] text-[16px] leading-[24px] font-normal">
                  Time
                </div>
                <div className="font-geist text-[#8570AD] text-[16px] leading-[24px] font-medium">
                  {event.time || "03:00 - 05:00 PM"}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[12px] ml-auto mr-[28px] w-[169px] h-[48px]">
              <div className="flex items-center justify-center w-[34px] h-[34px]">
                <MapPinIcon className="w-[34px] h-[34px] text-[#1D4ED8]" />
              </div>
              <div>
                <div className="font-geist text-[#6A6A6A] text-[16px] leading-[24px] font-normal">
                  Location
                </div>
                <div className="font-geist text-[#8570AD] text-[16px] leading-[24px] font-medium">
                  {event.location}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-[993px] w-[920px] h-[323px] bg-white border border-[rgba(189,187,251,0.35)] rounded-[12px]">
            <div className="absolute left-[26px] top-[26px] font-geist font-medium text-[24px] leading-[29px] tracking-[-0.05em] text-[#242565]">
              Select Number of Seats
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[80px] flex flex-row gap-[11px] w-[849px] h-[140px]">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setSelectedSeats(num)}
                  className={`flex flex-col items-center justify-center w-[204px] h-[140px] border rounded-[5.8px] transition-all duration-150 outline-none focus:ring-2 ${
                    selectedSeats === num
                      ? "bg-[#FAFAFF] border-[#8570AD] shadow-[0_0_2.88px_rgba(0,0,0,0.04),0_5.77px_11.54px_rgba(0,0,0,0.08)] ring-2 ring-[#4157FE]"
                      : "border-[#E6E6E6] bg-white hover:border-[#8570AD]"
                  }`}
                  aria-pressed={selectedSeats === num}
                >
                  <TicketIcon />
                  <span className="font-geist font-semibold text-[21px] leading-[25px] tracking-[-0.05em] text-[#242565]">
                    {num}
                  </span>
                  <span className="font-geist font-semibold text-[16px] leading-[19px] tracking-[-0.05em] text-[#8570AD] mt-2">
                    {num === 1 ? "Seat" : "Seats"}
                  </span>
                </button>
              ))}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[251px] flex flex-row gap-[17px] w-[107px] h-[38px]">
              <button
                className="w-[107px] h-[38px] flex justify-center items-center rounded-[6px] bg-gradient-to-b from-[#7B8BFF] to-[#4157FE] shadow-[inset_0_-2.94px_1.31px_#4D3DEA,inset_0_2.61px_2.71px_rgba(255,255,255,0.25)] font-geist font-semibold text-[15.35px] leading-[16px] text-white"
                onClick={() => navigate("/signin")}
              >
                {`Book ${selectedSeats} Seat${selectedSeats > 1 ? "s" : ""}`}
              </button>
            </div>
          </div>

          <div className="absolute left-[105px] top-[1362px] font-geist font-medium text-[24px] leading-[29px] tracking-[-0.05em] text-[#242565]">
            About this event
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[1412px] w-[1237px] text-[#8570AD] font-geist text-[18px] leading-[24px] font-normal">
            {event.description}
          </div>

          <div className="absolute left-[104px] top-[1797px] flex flex-row items-center gap-[11px] w-[504px] h-[59px]">
            <ChairIcon className="w-[38px] h-[38px]" />
            <span className="font-geist font-medium text-[25.44px] leading-[38px] tracking-[-0.05em] text-[#8570AD]">
              20 Spots Left{" "}
              <span className="text-[#C0C0C0]">(2000 registered)</span>
            </span>
          </div>

          <div className="absolute left-[103px] top-[1788px] w-[1233px] border-t border-[#F1F0F9]" />
        </div>
      </main>

      <Footer />
    </div>
  );
};
