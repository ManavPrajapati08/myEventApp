export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  image: string;
  date: string;
  isFavorite: boolean;
  city: string;
  country: string;
}
