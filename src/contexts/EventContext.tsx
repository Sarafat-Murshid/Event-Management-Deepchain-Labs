import { createContext, useContext, useState, ReactNode } from "react";
import type { Event } from "../types/Event"; // Use your global Event type

type EventContextType = {
  events: Event[];
  addEvent: (event: Event) => void;
  editEvent: (event: Event) => void;
  deleteEvent: (id: number) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export const useEventContext = () => {
  const ctx = useContext(EventContext);
  if (!ctx)
    throw new Error("useEventContext must be used within EventProvider");
  return ctx;
};

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Past Event 1",
      date: "2024-01-10T18:00:00",
      location: "New York",
      description: "A past event in New York.",
      image: "https://picsum.photos/seed/past1/400/200",
      capacity: 100,
      registrations: "0/100",
    },
    {
      id: 2,
      title: "Past Event 2",
      date: "2024-02-15T18:00:00",
      location: "London",
      description: "A past event in London.",
      image: "https://picsum.photos/seed/past2/400/200",
      capacity: 80,
      registrations: "0/80",
    },
    {
      id: 3,
      title: "Past Event 3",
      date: "2024-03-20T18:00:00",
      location: "Berlin",
      description: "A past event in Berlin.",
      image: "https://picsum.photos/seed/past3/400/200",
      capacity: 60,
      registrations: "0/60",
    },
    {
      id: 4,
      title: "Past Event 4",
      date: "2024-04-10T18:00:00",
      location: "Paris",
      description: "A past event in Paris.",
      image: "https://picsum.photos/seed/past4/400/200",
      capacity: 120,
      registrations: "0/120",
    },
    {
      id: 5,
      title: "Past Event 5",
      date: "2024-05-05T18:00:00",
      location: "Tokyo",
      description: "A past event in Tokyo.",
      image: "https://picsum.photos/seed/past5/400/200",
      capacity: 90,
      registrations: "0/90",
    },
    {
      id: 6,
      title: "Past Event 6",
      date: "2024-06-01T18:00:00",
      location: "Sydney",
      description: "A past event in Sydney.",
      image: "https://picsum.photos/seed/past6/400/200",
      capacity: 70,
      registrations: "0/70",
    },
    ...Array.from({ length: 12 }).map((_, i) => ({
      id: 7 + i,
      title: `Upcoming Event ${i + 1}`,
      date: `2025-07-${String(i + 1).padStart(2, "0")}T18:00:00`,
      location: ["New York", "London", "Berlin", "Paris", "Tokyo", "Sydney"][
        i % 6
      ],
      description: `An upcoming event in ${
        ["New York", "London", "Berlin", "Paris", "Tokyo", "Sydney"][i % 6]
      }.`,
      image: `https://picsum.photos/seed/upcoming${i + 1}/400/200`,
      capacity: 100 + i * 10,
      registrations: `0/${100 + i * 10}`,
    })),
  ]);

  const addEvent = (event: Event) => setEvents((prev) => [...prev, event]);
  const editEvent = (event: Event) =>
    setEvents((prev) => prev.map((e) => (e.id === event.id ? event : e)));
  const deleteEvent = (id: number) =>
    setEvents((prev) => prev.filter((e) => e.id !== id));

  return (
    <EventContext.Provider value={{ events, addEvent, editEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};
