import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventContext } from "../contexts/EventContext";
import { EventCard } from "./EventCard";

const EVENTS_PER_PAGE = 6;

export function EventList({ type }: { type: "upcoming" | "past" }) {
  const { events } = useEventContext();
  const navigate = useNavigate();
  const now = new Date();
  const [page, setPage] = useState(1);

  const filtered = events.filter((event) =>
    type === "upcoming"
      ? new Date(event.date) >= now
      : new Date(event.date) < now
  );

  const totalPages = Math.ceil(filtered.length / EVENTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * EVENTS_PER_PAGE,
    page * EVENTS_PER_PAGE
  );

  if (filtered.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No {type === "upcoming" ? "upcoming" : "past"} events found.
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        {paginated.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onClick={() => navigate(`/events/${event.id}`)}
          />
        ))}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`px-3 py-1 rounded ${
                page === idx + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
