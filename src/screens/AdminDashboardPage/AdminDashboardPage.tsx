import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Footer } from "../../components/Footer";

const adminEvents = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "Sunday, 14 April, 2025",
    location: "San Francisco, CA",
    registrations: "130/500",
  },
  {
    id: 2,
    title: "Startup Meetup",
    date: "Monday, 20 May, 2025",
    location: "New York, NY",
    registrations: "80/200",
  },
];

export const AdminDashboardPage = () => {
  const navigate = useNavigate();

  // Protect route
  React.useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaff]">
      {/* Header */}
      <header className="w-full h-[60px] bg-[#ffffff1a] backdrop-blur-[32px] flex items-center justify-between px-[102px]">
        <div className="flex items-center gap-[8.09px]">
          <img
            className="w-[26.96px] h-[26.96px]"
            alt="Ticket icon"
            src="/vuesax-bold-ticket-2.svg"
          />
          <div className="[text-shadow:0px_3.89px_3.07px_#8b60dd21] text-[27px] tracking-[-1.35px] leading-[27px] font-gilroy font-bold text-[#240a62] whitespace-nowrap">
            Event buddy.
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-geist font-medium text-base text-[#242565]">
            Hello, Admin
          </span>
          <Button
            onClick={() => {
              localStorage.removeItem("isAdmin");
              navigate("/signin");
            }}
            className="flex items-center gap-2 px-6 h-[38px] rounded-md bg-gradient-to-b from-[#7B8BFF] to-[#4157FE] text-white font-geist font-semibold text-[15.35px] leading-[16px] tracking-[-0.02em] shadow-[inset_0px_-2.94px_1.31px_#4D3DEA,inset_0px_2.61px_2.71px_rgba(255,255,255,0.25)]"
          >
            <LogoutIcon />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="px-[109px] pt-[28px]">
        <h1 className="text-[36px] font-geist font-medium tracking-[-0.05em] text-[#242565]">
          Admin Dashboard
        </h1>
        <p className="mt-4 text-[20.26px] font-geist font-normal leading-[131%] tracking-[-0.02em] text-[#8570AD]">
          Manage events, view registrations, and monitor your platform.
        </p>
        <div className="flex justify-between items-center mt-[60px] mb-2">
          <h2 className="text-[24px] font-geist font-medium tracking-[-0.05em] text-[#242565]">
            Events Management
          </h2>
          <Button className="w-[114px] h-[38px] bg-gradient-to-b from-[#7B8BFF] to-[#4157FE] text-white font-geist font-semibold text-[15.35px] leading-[104.3%] tracking-[-0.02em] shadow-[inset_0px_-2.94px_1.31px_#4D3DEA,inset_0px_2.61px_2.71px_rgba(255,255,255,0.25)] rounded-md">
            Create Event
          </Button>
        </div>
        {/* Table Header */}
        <div className="w-full bg-white border-b border-[#E6E6E6] rounded-t-lg flex items-center px-4 py-3 font-geist text-[#242565] text-[14px] font-medium">
          <div className="flex-[3]">Title</div>
          <div className="flex-[3]">Date</div>
          <div className="flex-[2]">Location</div>
          <div className="flex-[2]">Registrations</div>
          <div className="flex-[1]">Actions</div>
        </div>
        {/* Table Rows */}
        {adminEvents.map((event) => (
          <div
            key={event.id}
            className="w-full bg-white border-b border-[#E6E6E6] flex items-center px-4 py-3 font-geist text-[#242565] text-[14px]"
          >
            <div className="flex-[3]">{event.title}</div>
            <div className="flex-[3]">{event.date}</div>
            <div className="flex-[2]">{event.location}</div>
            <div className="flex-[2]">{event.registrations}</div>
            <div className="flex-[1] flex gap-4">
              <button title="View">
                <EyeIcon />
              </button>
              <button title="Edit">
                <EditIcon />
              </button>
              <button title="Delete">
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

// SVG Icon Components
const LogoutIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path
      d="M7.41667 6.3V5.25C7.41667 3.258 9.025 1.65 11.0167 1.65H14.75C16.7333 1.65 18.35 3.267 18.35 5.25V14.75C18.35 16.733 16.7417 18.35 14.75 18.35H11.0083C9.025 18.35 7.41667 16.742 7.41667 14.75V13.691"
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
      d="M4.875 7.208L2.083 10L4.875 12.792"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const EyeIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
    <ellipse cx="10" cy="10" rx="7" ry="4" stroke="#242565" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="2" stroke="#242565" strokeWidth="1.5" />
  </svg>
);
const EditIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
    <rect
      x="4"
      y="13"
      width="12"
      height="3"
      rx="1"
      stroke="#242565"
      strokeWidth="1.5"
    />
    <path
      d="M13.5 6.5L15 8L8 15H6.5V13.5L13.5 6.5Z"
      stroke="#242565"
      strokeWidth="1.5"
    />
  </svg>
);
const TrashIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
    <rect
      x="5"
      y="7"
      width="10"
      height="8"
      rx="2"
      stroke="#FF0E12"
      strokeWidth="1.5"
    />
    <path d="M8 9V13" stroke="#FF0E12" strokeWidth="1.5" />
    <path d="M12 9V13" stroke="#FF0E12" strokeWidth="1.5" />
    <path d="M3 7H17" stroke="#FF0E12" strokeWidth="1.5" />
  </svg>
);
