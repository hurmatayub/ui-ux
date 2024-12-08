export interface CarCardProps {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  originalPrice?: number;
  isFavorite: boolean;
}

export interface PickupDropoffProps {
  type: "pickup" | "dropoff";
  dotColor: string;
}

export interface LocationTimeProps {
  label: string;
  placeholder: string;
  iconSrc: string;
}
