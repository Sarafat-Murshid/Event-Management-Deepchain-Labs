import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { useAuth } from "../../contexts/AuthContext";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { Footer } from "../../components/Footer";
import { HeaderSection } from "../LandingPage/sections/HeaderSection/HeaderSection";

export const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedSeats, setSelectedSeats] = useState(1);

  // Mock event data - in a real app, this would come from an API
  const event = {
    id,
    title: "Tech Conference 2025",
    image: "/pic-8.png",
    date: "Sunday, 14 April, 2025",
    time: "03:00 - 06:00 PM",
    location: "San Francisco, CA",
    tags: ["Tech", "Conference", "AI"],
    description: `Join us for Tech Future Expo 2025, an immersive one-day technology event bringing together developers, startups, and industry leaders to explore the future of software, AI, blockchain, and cloud computing.

This event will feature:
• Keynote talks from industry pioneers
• Live demos of upcoming tech products
• Startup pitching sessions
• Hands-on coding workshops
• Networking lounge for professionals and students

Whether you're an aspiring developer, a seasoned engineer, or just curious about what's next in tech, this event offers something for everyone.`,
    totalSeats: 2000,
    availableSpots: 20,
  };

  const handleBooking = () => {
    if (!user) {
      navigate("/signin");
      return;
    }
    // Handle booking logic here
    console.log(`Booking ${selectedSeats} seats for event ${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9faff]">
      {/* Header */}
      <header>
        <HeaderSection />
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#4157fe] mb-6"
        >
          ← Back to events
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[400px] object-cover"
          />

          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {event.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-[#dadeff] text-blue-700 font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl font-bold text-[#242565] mb-4">
              {event.title}
            </h1>

            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-[#6a6a6a]" />
                <span className="text-[#6a6a6a]">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-[#6a6a6a]" />
                <span className="text-[#6a6a6a]">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-[#6a6a6a]" />
                <span className="text-[#6a6a6a]">{event.location}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#242565] mb-4">
                About this event
              </h2>
              <p className="text-[#6a6a6a] whitespace-pre-line">
                {event.description}
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#242565] mb-4">
                Select Number of Seats
              </h3>
              <div className="flex gap-4 mb-6">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSelectedSeats(num)}
                    className={`w-16 h-16 rounded-lg border ${
                      selectedSeats === num
                        ? "border-[#4157fe] bg-[#4157fe] text-white"
                        : "border-gray-200"
                    } flex flex-col items-center justify-center`}
                  >
                    <span className="text-lg">{num}</span>
                    <span className="text-sm">
                      {num === 1 ? "Seat" : "Seats"}
                    </span>
                  </button>
                ))}
              </div>

              <Button
                onClick={handleBooking}
                className="w-full bg-[#4157fe] text-white hover:bg-[#3a4ee6]"
              >
                {user
                  ? `Book ${selectedSeats} Seat${selectedSeats > 1 ? "s" : ""}`
                  : "Sign in to Book"}
              </Button>

              <p className="text-center text-[#6a6a6a] mt-4">
                {event.availableSpots} spots left out of {event.totalSeats}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};