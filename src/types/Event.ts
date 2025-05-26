export type Event = {
  id: number;
  title: string;
  date: string;
  time?: string;
  description?: string;
  location: string;
  image?: string; 
  imageUrl?: string; 
  tags?: string[] | { name: string; color?: string }[];
  registrations?: string;
  capacity?: number;
  spotsLeft?: number;
};
