export interface CarType {
  id: string;
  name: string;
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
  image: string;
  fuel: string;
  transmission: string;
  capacity: string;
  price: number;
  originalPrice?: number;
  isFavorite: boolean;
}
