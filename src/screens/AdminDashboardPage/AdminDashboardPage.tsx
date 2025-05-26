import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Footer } from "../../components/Footer";
import { EventFormModal } from "../../components/EventFormModal";
import { useEventContext } from "../../contexts/EventContext";
import type { Event } from "../../types/Event";
import { EyeIcon } from "../../components/icons/EyeIcon";
import { EditIcon } from "../../components/icons/EditIcon";
import { TrashIcon } from "../../components/icons/TrashIcon";

export const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { events, addEvent, editEvent, deleteEvent } = useEventContext();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/signin");
    }
  }, [navigate]);

  const handleCreateEvent = (data: Omit<Event, "id" | "registrations">) => {
    const newEvent: Event = {
      ...data,
      id: Date.now(),
      registrations: `0/${data.capacity}`,
      imageUrl:
        data.imageUrl ||
        data.image ||
        "https://via.placeholder.com/400x200?text=No+Image",
    };
    addEvent(newEvent);
    setIsCreateModalOpen(false);
  };

  const handleEditEvent = (data: Partial<Event>) => {
    if (!currentEvent) return;
    editEvent({ ...currentEvent, ...data });
    setIsEditModalOpen(false);
    setCurrentEvent(null);
  };

  const handleDeleteEvent = (id: number) => {
    if (confirm("Are you sure you want to delete this event?")) {
      deleteEvent(id);
    }
  };

  const openEditModal = (event: Event) => {
    setCurrentEvent(event);
    setIsEditModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaff]">
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
          <div className="text-[27px] tracking-[-1.35px] leading-[27px] font-bold text-[#240a62] whitespace-nowrap">
            Event buddy.
          </div>
        </button>
        <div className="flex items-center gap-4">
          <span className="font-medium text-base text-[#242565]">
            Hello, Admin
          </span>
          <Button
            onClick={() => {
              localStorage.removeItem("isAdmin");
              navigate("/signin");
            }}
            className="flex items-center gap-2 px-6 h-[38px] rounded-md bg-gradient-to-b from-[#7B8BFF] to-[#4157FE] text-white"
          >
            <LogoutIcon />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      <div className="px-[109px] pt-[28px] flex-grow">
        <h1 className="text-[36px] font-medium tracking-[-0.05em] text-[#242565]">
          Admin Dashboard
        </h1>
        <p className="mt-4 text-[20.26px] text-[#8570AD]">
          Manage events, view registrations, and monitor your platform.
        </p>

        <div className="flex justify-between items-center mt-[60px] mb-2">
          <h2 className="text-[24px] font-medium tracking-[-0.05em] text-[#242565]">
            Events Management
          </h2>
          <Button
            onClick={() => setIsCreateModalOpen(true)}
            className="w-[114px] h-[38px] bg-gradient-to-b from-[#7B8BFF] to-[#4157FE] text-white font-geist font-semibold text-[15.35px] leading-[104.3%] tracking-[-0.02em] shadow-[inset_0px_-2.94px_1.31px_#4D3DEA,inset_0px_2.61px_2.71px_rgba(255,255,255,0.25)] rounded-md"
          >
            Create Event
          </Button>
        </div>

        <div className="overflow-x-auto rounded-lg shadow mb-8">
          <div className="w-full bg-white border-b border-[#E6E6E6] rounded-t-lg flex items-center px-4 py-3 font-medium text-[#242565] text-[14px]">
            <div className="flex-[3]">Title</div>
            <div className="flex-[3]">Date</div>
            <div className="flex-[2]">Location</div>
            <div className="flex-[2]">Registrations</div>
            <div className="flex-[1]">Actions</div>
          </div>
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.id}
                className="w-full bg-white border-b border-[#E6E6E6] flex items-center px-4 py-3 text-[#242565] text-[14px]"
              >
                <div className="flex-[3]">{event.title}</div>
                <div className="flex-[3]">{event.date}</div>
                <div className="flex-[2]">{event.location}</div>
                <div className="flex-[2]">
                  {event.registrations ?? `0/${event.capacity ?? 0}`}
                </div>
                <div className="flex-[1] flex gap-4">
                  <button
                    title="View"
                    onClick={() => navigate(`/events/${event.id}`)}
                  >
                    <EyeIcon />
                  </button>
                  <button title="Edit" onClick={() => openEditModal(event)}>
                    <EditIcon />
                  </button>
                  <button
                    title="Delete"
                    onClick={() => handleDeleteEvent(event.id)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full bg-white py-6 text-center text-gray-500">
              No events found. Create your first event to get started.
            </div>
          )}
        </div>
      </div>

      <EventFormModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateEvent}
        title="Create New Event"
      />

      <EventFormModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setCurrentEvent(null);
        }}
        onSubmit={handleEditEvent}
        event={currentEvent as Event}
        title="Edit Event"
        isEditing
      />

      <Footer />
    </div>
  );
};

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
