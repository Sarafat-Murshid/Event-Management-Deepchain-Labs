import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogContent,
} from "./ui/dialog";
import { EventForm } from "./EventForm";
import { Event } from "../types/event";

interface EventFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  event?: Event;
  title: string;
  isEditing?: boolean;
}

export function EventFormModal({
  isOpen,
  onClose,
  onSubmit,
  event,
  title,
  isEditing = false,
}: EventFormModalProps) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} className="w-[552px]">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogClose onClick={onClose} />
      </DialogHeader>
      <DialogContent>
        <EventForm
          event={event}
          onSubmit={onSubmit}
          onCancel={onClose}
          isEditing={isEditing}
        />
      </DialogContent>
    </Dialog>
  );
}
