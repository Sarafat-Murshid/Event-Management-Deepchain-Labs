import { Event } from "../contexts/EventContext";
import { EventCard } from "./EventCard";

type Props = {
  events: Event[];
  columns?: string; // e.g. "grid-cols-3"
  onCardClick?: (event: Event) => void;
};

export function EventGrid({ events, columns = "grid-cols-3", onCardClick }: Props) {
  return (
    <div className={`grid ${columns} gap-6`}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} onClick={onCardClick ? () => onCardClick(event) : undefined} />
      ))}
    </div>
  );
}