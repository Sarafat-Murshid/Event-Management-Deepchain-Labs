import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Button } from "./ui/button";
import { Event } from "../types/Event";
import { ClockIcon } from "./icons/ClockIcon";
import { CalendarIcon } from "../components/icons/CalendarIcon";

const eventFormSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  date: z.string().min(1, { message: "Date is required" }),
  time: z.string().min(1, { message: "Time is required" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  location: z.string().min(3, { message: "Location is required" }),
  capacity: z.string().min(1, { message: "Capacity is required" }),
  tags: z.string().optional(),
  image: z.instanceof(File).optional(),
});

type EventFormValues = z.infer<typeof eventFormSchema>;

interface EventFormProps {
  event?: Event;
  onSubmit: (data: EventFormValues) => void;
  onCancel: () => void;
  isEditing?: boolean;
}

export function EventForm({
  event,
  onSubmit,
  onCancel,
  isEditing = false,
}: EventFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: event
      ? {
          title: event.title,
          date: event.date,
          time: event.time || "",
          description: event.description || "",
          location: event.location || "",
          capacity: event.capacity?.toString() || "",
          tags: Array.isArray(event.tags)
            ? event.tags.join(", ")
            : event.tags || "",
        }
      : undefined,
  });

  const [imagePreview, setImagePreview] = React.useState<string | null>(
    event?.imageUrl || null
  );
  const [base64Image, setBase64Image] = React.useState<string | null>(
    event?.imageUrl || null
  );

  const capacityOptions = Array.from({ length: 20 }, (_, i) => {
    const value = (i + 1) * 50;
    return { value: value.toString(), label: value.toString() };
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setBase64Image(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (data: any) => {
    onSubmit({
      ...data,
      imageUrl: base64Image,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
      <Input
        label="Title"
        placeholder="Event title"
        {...register("title")}
        error={errors.title?.message}
      />

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#242565] font-geist">
            Date
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="dd/mm/yyyy"
              {...register("date")}
              error={errors.date?.message}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <CalendarIcon/>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#242565] font-geist">
            Time
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="e.g. 09:00 AM - 11:00 AM"
              {...register("time")}
              error={errors.time?.message}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ClockIcon/>
            </div>
          </div>
        </div>
      </div>

      <Textarea
        label="Description"
        placeholder="Event description"
        {...register("description")}
        error={errors.description?.message}
        className="resize-none min-h-[82px]"
      />

      <Input
        label="Event Location"
        placeholder="Location"
        {...register("location")}
        error={errors.location?.message}
      />

      <div className="grid grid-cols-2 gap-8">
        <Controller
          name="capacity"
          control={control}
          render={({ field }) => (
            <Select
              label="Capacity"
              options={capacityOptions}
              {...field}
              error={errors.capacity?.message}
            />
          )}
        />

        <Input
          label="Tags (comma separated)"
          placeholder="e.g. conference, tech, networking"
          {...register("tags")}
          error={errors.tags?.message}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#242565]">
          Image
        </label>
        <div className="flex items-center gap-3">
          <div className="w-full flex items-center justify-between p-2 border border-[#E5E9EB] rounded-md">
            <div className="flex items-center gap-3">
              <div className="bg-[#F4F4F5] p-4 rounded-full">
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0684 12.5404L14.9816 16.4536L13.6772 17.758L11.9908 16.0723V21.2237H10.146V16.0705L8.45956 17.758L7.15514 16.4536L11.0684 12.5404ZM11.0684 2.77637C14.3828 2.77637 17.114 5.27378 17.4827 8.48947C19.6333 9.07756 21.2145 11.0459 21.2145 13.3836C21.2145 16.0297 19.1886 18.2026 16.6032 18.436L16.6034 16.579C18.1675 16.3549 19.3697 15.0096 19.3697 13.3836C19.3697 11.6007 17.9244 10.1553 16.1414 10.1553C15.9488 10.1553 15.7602 10.1722 15.5776 10.2051C15.6448 9.8917 15.6803 9.56645 15.6803 9.23294C15.6803 6.6859 13.6154 4.6211 11.0684 4.6211C8.52137 4.6211 6.45657 6.6859 6.45657 9.23294C6.45657 9.56645 6.49197 9.8917 6.55992 10.2045C6.37661 10.1722 6.18797 10.1553 5.99539 10.1553C4.21245 10.1553 2.7671 11.6007 2.7671 13.3836C2.7671 14.9519 3.88539 16.259 5.36805 16.551L5.53425 16.5792L5.53456 18.436C2.94877 18.2032 0.922363 16.0301 0.922363 13.3836C0.922363 11.0459 2.50352 9.07756 4.65471 8.48962C5.02285 5.27378 7.75398 2.77637 11.0684 2.77637Z"
                    fill="#242565"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#242565]">
                  Drag or{" "}
                  <span className="text-blue-600 cursor-pointer">upload</span>{" "}
                  the picture here
                </span>
                <span className="text-xs text-[#6A6A6A]">
                  Max. 5MB | JPG, PNG
                </span>
              </div>
            </div>
            <label
              htmlFor="file-upload"
              className="bg-[#F0F5FF] text-[#1D4ED8] text-xs px-2 py-1.5 rounded border border-[#DBE9FF] cursor-pointer"
            >
              Browse
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept="image/jpeg,image/png"
              onChange={handleImageChange}
            />
          </div>
        </div>
        {imagePreview && (
          <div className="mt-2">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-20 w-auto object-cover rounded-md"
            />
          </div>
        )}
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <Button
          type="button"
          onClick={onCancel}
          className="font-semibold text-[#6A6A6A] bg-transparent hover:bg-gray-100"
          variant="ghost"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="w-[114px] bg-gradient-to-b from-[#7B8BFF] to-[#4157FE] text-white font-geist font-semibold text-[15.35px] leading-[104.3%] tracking-[-0.02em] shadow-[inset_0px_-2.94px_1.31px_#4D3DEA,inset_0px_2.61px_2.71px_rgba(255,255,255,0.25)] rounded-md"
        >
          {isEditing ? "Update" : "Create Event"}
        </Button>
      </div>
    </form>
  );
}
