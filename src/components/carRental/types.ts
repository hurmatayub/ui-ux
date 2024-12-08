export interface CarType {
  id: string;
  name: string;
  category: string;
  count: number;
  icon: string;
}

export interface CarCapacity {
  id: string;
  capacity: string;
  count: number;
  icon: string;
}

export interface ReviewType {
  id: string;
  name: string;
  position: string;
  date: string;
  rating: number;
  avatar: string;
  review: string;
}

export interface CarCardProps {
  name: string;
  type: string;
  fuel: string;
  capacity: string;
  transmission: string;
  price: number;
  originalPrice?: number;
  image: string;
  isFavorite: boolean;
}
