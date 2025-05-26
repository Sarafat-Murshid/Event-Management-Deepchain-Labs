import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Button } from "./ui/button";
import { Event } from "../types/Event";

// Schema for form validation
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

  // Capacity options
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 7.5H17.5"
                  stroke="#8570AD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.9 1.7V4.3"
                  stroke="#8570AD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.1 1.7V4.3"
                  stroke="#8570AD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 2.5H14.5C16.5 2.5 17.5 3.5 17.5 5.5V14.5C17.5 16.5 16.5 17.5 14.5 17.5H5.5C3.5 17.5 2.5 16.5 2.5 14.5V5.5C2.5 3.5 3.5 2.5 5.5 2.5Z"
                  stroke="#8570AD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
                  stroke="#8570AD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5V10H13.3333"
                  stroke="#8570AD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 14.6667L11 11M11 11L7.33333 14.6667M11 11V19.25"
                    stroke="#242565"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3333 16.5H19.25C20.7228 16.5 21.9167 15.3061 21.9167 13.8333V5.5C21.9167 4.02724 20.7228 2.83333 19.25 2.83333H2.75C1.27724 2.83333 0.0833333 4.02724 0.0833333 5.5V13.8333C0.0833333 15.3061 1.27724 16.5 2.75 16.5H3.66667"
                    stroke="#242565"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
