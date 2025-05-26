import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useAuth } from "../../contexts/AuthContext";
import { Footer } from "../../components/Footer";
import { useEventContext } from "../../contexts/EventContext";

export const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { events } = useEventContext();

  if (!user) {
    navigate("/signin");
    return null;
  }

  // Filter events based on user's registrations if you track them
  // For now, show all upcoming events as an example:
  const now = new Date();
  const registeredEvents = events.filter(
    (event) => new Date(event.date) >= now
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaff]">
      {/* Header */}
      <header className="w-full h-[60px] bg-[#ffffff1a] backdrop-blur-[32px] flex items-center justify-between px-[102px]">
        <button
          className="flex items-center gap-[8.09px] focus:outline-none"
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
          aria-label="Go to home"
        >
          <img
            className="w-[26.96px] h-[26.96px]"
            alt="Ticket icon"
            src="/vuesax-bold-ticket-2.svg"
          />
          <div className="[text-shadow:0px_3.89px_3.07px_#8b60dd21] text-[27px] tracking-[-1.35px] leading-[27px] font-gilroy font-bold text-[#240a62] whitespace-nowrap">
            Event buddy.
          </div>
        </button>

        <div className="flex items-center gap-4">
          <span className="font-geist font-medium text-[16px] leading-[104.3%] tracking-[-0.05em] text-[#242565]">
            Hello, {user.name}
          </span>
          <Button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="flex items-center justify-center gap-2 w-[102px] h-[38px] rounded-[6px] bg-gradient-to-b from-[#7B8BFF] to-[#4157FE] text-white font-geist font-semibold text-[15.35px] leading-[104.3%] tracking-[-0.02em] shadow-[inset_0px_-2.94px_1.31px_#4D3DEA,inset_0px_2.61px_2.71px_rgba(255,255,255,0.25)]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.41667 6.30007V5.25007C7.41667 3.25841 9.025 1.65007 11.0167 1.65007H14.75C16.7333 1.65007 18.35 3.26674 18.35 5.25007V14.7501C18.35 16.7334 16.7417 18.3501 14.75 18.3501H11.0083C9.02500 18.3501 7.41667 16.7417 7.41667 14.7501V13.6917"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.6916 10H3.0166"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.875 7.20841L2.08333 10.0001L4.875 12.7917"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Logout</span>
          </Button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="px-[104px] pt-[28px]">
        <h1 className="text-[36px] font-geist font-medium tracking-[-0.05em] text-[#242565]">
          Dashboard
        </h1>
        <p className="mt-4 text-[20.26px] font-geist font-normal leading-[131%] tracking-[-0.02em] text-[#8570AD]">
          Welcome back, {user.name}! Here you can manage your event
          registrations.
        </p>

        <div className="mt-12">
          <h2 className="text-[24px] font-geist font-medium tracking-[-0.05em] text-[#242565]">
            My Registered Events
          </h2>

          <div className="mt-4 space-y-4">
            {registeredEvents.map((event) => {
              const dateObj = new Date(event.date);
              const month = dateObj
                .toLocaleString("default", { month: "short" })
                .toUpperCase();
              const day = dateObj.getDate();
              const weekday = dateObj.toLocaleString("default", {
                weekday: "long",
              });
              const time = dateObj.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });

              return (
                <div
                  key={event.id}
                  onClick={() => navigate(`/events/${event.id}`)}
                  className="w-full h-[123px] bg-white border border-[#BDBBFB59] rounded-xl px-6 py-[22px] flex items-center cursor-pointer"
                >
                  {/* Date Display */}
                  <div className="mr-8 text-center">
                    <div className="text-[24.55px] font-geist font-bold text-[#3D37F1] tracking-[-0.05em]">
                      {month}
                    </div>
                    <div className="text-[49.11px] font-geist font-bold leading-[64px] tracking-[-0.05em]">
                      {day}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <h3 className="text-[20px] font-geist font-medium leading-[120%] tracking-[-0.05em] text-[#242565] mb-5">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-10 text-[16.08px] font-geist text-[#6A6A6A]">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-[18px] h-[18px] text-[#8570AD]" />
                        <span>{weekday}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-[18px] h-[18px] text-[#8570AD]" />
                        <span>{time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LocationIcon className="w-[18px] h-[18px] text-[#8570AD]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Cancel Registration Button */}
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle cancellation
                    }}
                    className="w-[156px] h-[38px] bg-gradient-to-b from-[#FF847B] to-[#FE4141] text-white font-geist font-semibold text-[15.35px] leading-[104.3%] tracking-[-0.02em] shadow-[inset_0px_-2.94px_1.31px_#EA3D3D,inset_0px_2.61px_2.71px_rgba(255,255,255,0.25)] rounded-md"
                  >
                    Cancel registration
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              onClick={() => navigate("/")}
              className="w-[168px] h-[38px] mb-10 bg-gradient-to-b from-[#7B8BFF] to-[#4157FE] text-white font-geist font-semibold text-[15.35px] leading-[104.3%] tracking-[-0.02em] shadow-[inset_0px_-2.94px_1.31px_#4D3DEA,inset_0px_2.61px_2.71px_rgba(255,255,255,0.25)] rounded-md"
            >
              Browse more events
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Icon components
const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 18 18" fill="none">
    <path
      d="M6 1.5V3.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 1.5V3.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.625 6.8175H15.375"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 18 18" fill="none">
    <path
      d="M16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.7825 11.385L9.45753 9.99751C9.05253 9.75751 8.72253 9.18001 8.72253 8.70751V5.63251"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 18 18" fill="none">
    <path
      d="M9 10.0125C10.0355 10.0125 10.875 9.17307 10.875 8.1375C10.875 7.10193 10.0355 6.2625 9 6.2625C7.96447 6.2625 7.125 7.10193 7.125 8.1375C7.125 9.17307 7.96447 10.0125 9 10.0125Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M2.63245 6.37505C4.07995 -0.262451 13.9275 -0.254951 15.3675 6.38255C16.2225 10.183 13.7775 13.433 11.7 15.4205C10.0725 16.9955 7.92745 16.9955 6.29245 15.4205C4.22245 13.433 1.77745 10.175 2.63245 6.37505Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);
