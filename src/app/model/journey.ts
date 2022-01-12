export interface Journey {
  id: string;
  stationFrom: string;
  stationTo: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  availableSeats: number;
}