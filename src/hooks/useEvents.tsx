import { useEffect, useState } from "react";
import type { Event } from "../types/Event";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) {
      setEvents(JSON.parse(stored));
    } else {
      fetch("/events.json")
        .then((res) => res.json())
        .then((data) => setEvents(data))
        .catch(() => setEvents([]));
    }
  }, []);
 
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return [events, setEvents] as const;
}