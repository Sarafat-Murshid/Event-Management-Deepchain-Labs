import { useEventContext } from "../../contexts/EventContext";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EventCard } from "../../components/EventCard";

const UPCOMING_PER_PAGE = 6;
const PAST_PER_PAGE = 3;

export const LandingPage = (): JSX.Element => {
  const { events } = useEventContext();
  const navigate = useNavigate();
  const now = new Date();

  // Pagination state
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [pastPage, setPastPage] = useState(1);

  // Filtered events
  const upcomingEventsAll = events.filter(
    (event) => new Date(event.date) >= now
  );
  const pastEventsAll = events.filter((event) => new Date(event.date) < now);

  // Pagination logic
  const totalUpcomingPages = Math.ceil(
    upcomingEventsAll.length / UPCOMING_PER_PAGE
  );
  const totalPastPages = Math.ceil(pastEventsAll.length / PAST_PER_PAGE);

  const upcomingEvents = upcomingEventsAll.slice(
    (upcomingPage - 1) * UPCOMING_PER_PAGE,
    upcomingPage * UPCOMING_PER_PAGE
  );

  const pastEvents = pastEventsAll.slice(
    (pastPage - 1) * PAST_PER_PAGE,
    pastPage * PAST_PER_PAGE
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#f9faff]">
      <HeaderSection />
      <HeroSection />
      <div className="flex-1 w-full max-w-[1440px] mx-auto">
        {/* Upcoming Events Section */}
        <section className="mt-16 px-8 md:px-[104px]">
          <h2 className="font-geist font-medium text-[#242565] text-4xl tracking-[-0.05em] leading-9 mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => navigate(`/events/${event.id}`)}
              />
            ))}
          </div>
          {totalUpcomingPages > 1 && (
            <div className="flex justify-center mt-10 gap-2">
              {Array.from({ length: totalUpcomingPages }).map((_, idx) => (
                <button
                  key={idx}
                  className={`flex items-center justify-center px-3 py-2 min-w-[32px] min-h-[32px] rounded-[8px] font-gilroy text-base transition
                    ${
                      upcomingPage === idx + 1
                        ? "bg-[#4157FE] text-white shadow"
                        : "bg-white text-[#191F38] border border-[#EBEBEB] hover:bg-indigo-50"
                    }`}
                  style={{ fontWeight: 400 }}
                  onClick={() => setUpcomingPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Previous Events Section */}
        <section className="mt-20 px-8 md:px-[100px] mb-16">
          <h2 className="font-geist font-medium text-[#242565] text-4xl tracking-[-0.05em] leading-9 mb-8">
            Previous Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => navigate(`/events/${event.id}`)}
              />
            ))}
          </div>
          {totalPastPages > 1 && (
            <div className="flex justify-center mt-10 gap-2">
              {Array.from({ length: totalPastPages }).map((_, idx) => (
                <button
                  key={idx}
                  className={`flex items-center justify-center px-3 py-2 min-w-[32px] min-h-[32px] rounded-[8px] font-gilroy text-base transition
                    ${
                      pastPage === idx + 1
                        ? "bg-[#4157FE] text-white shadow"
                        : "bg-white text-[#191F38] border border-[#EBEBEB] hover:bg-indigo-50"
                    }`}
                  style={{ fontWeight: 400 }}
                  onClick={() => setPastPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};
