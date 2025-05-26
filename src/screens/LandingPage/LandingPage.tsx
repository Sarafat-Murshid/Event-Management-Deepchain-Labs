import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../../components/ui/pagination";
import { EventCardSection } from "./sections/EventCardSection";
import { EventSearchSection } from "./sections/EventSearchSection/EventSearchSection";
import { EventsWrapperSection } from "./sections/EventsWrapperSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PreviousEventsWrapperSection } from "./sections/PreviousEventsWrapperSection/PreviousEventsWrapperSection";
import { UpcomingEventsSection } from "./sections/UpcomingEventsSection";
import { Footer } from "../../components/Footer";

export const LandingPage = (): JSX.Element => {
  // Pagination data for reuse
  const paginationData = [
    { page: 1, active: true },
    { page: 2, active: false },
    { page: 3, active: false },
    { page: "...", active: false, ellipsis: true },
    { page: 67, active: false },
    { page: 68, active: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f9faff]">
      {/* Header stays centered */}
      <div>
        <HeaderSection />
      </div>
      {/* Hero section is now full width */}
      <HeroSection />
      {/* Main content stays centered */}
      <div className="flex-1 w-full max-w-[1440px] mx-auto">
        {/* Upcoming Events Section */}
        <div className="mt-16 px-[104px]">
          <h2 className="[text-shadow:0px_12.69px_10.03px_#8b60dd21] [font-family:'Geist',Helvetica] font-medium text-[#242565] text-4xl tracking-[-1.80px] leading-9 mb-8">
            Upcoming Events
          </h2>

          <div className="flex flex-col gap-8">
            {/* First row of upcoming events */}
            <div className="grid grid-cols-3 gap-6">
              <EventCardSection />
              <EventCardSection />
              <EventCardSection />
            </div>

            {/* Second row of upcoming events */}
            <div className="grid grid-cols-3 gap-6">
              <EventCardSection />
              <EventCardSection />
              <EventCardSection />
            </div>

            {/* Pagination for Upcoming Events */}
            <div className="flex justify-center my-8">
              <Pagination>
                <PaginationContent>
                  {paginationData.map((item, index) => (
                    <PaginationItem key={index}>
                      {item.ellipsis ? (
                        <div className="px-4 py-2">
                          <span className="font-body-base-bold text-[#191f38]">
                            {item.page}
                          </span>
                        </div>
                      ) : (
                        <PaginationLink
                          className={`${
                            item.active
                              ? "bg-[#4157fe] text-white"
                              : "bg-white border border-[#eaeaea] text-[#191f38]"
                          } [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-base`}
                          isActive={item.active}
                        >
                          {item.page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>

        {/* Previous Events Section */}
        <div className="mt-16 px-[100px]">
          <h2 className="[text-shadow:0px_12.69px_10.03px_#8b60dd21] [font-family:'Geist',Helvetica] font-medium text-[#242565] text-4xl tracking-[-1.80px] leading-9 mb-8">
            Previous Events
          </h2>

          <div className="flex flex-col gap-8">
            {/* Single row of previous events */}
            <div className="grid grid-cols-3 gap-6">
              <EventCardSection />
              <EventCardSection />
              <EventCardSection />
            </div>

            {/* Pagination for Previous Events */}
            <div className="flex justify-center my-8">
              <Pagination>
                <PaginationContent>
                  {paginationData.map((item, index) => (
                    <PaginationItem key={index}>
                      {item.ellipsis ? (
                        <div className="px-4 py-2">
                          <span className="font-body-base-bold text-[#191f38]">
                            {item.page}
                          </span>
                        </div>
                      ) : (
                        <PaginationLink
                          className={`${
                            item.active
                              ? "bg-[#4157fe] text-white"
                              : "bg-white border border-[#eaeaea] text-[#191f38]"
                          } [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-base`}
                          isActive={item.active}
                        >
                          {item.page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
