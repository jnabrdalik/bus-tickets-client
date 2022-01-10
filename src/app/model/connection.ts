export interface Connection {
  journeyId: number;
  stationFrom: string;
  stationTo: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  availableSeats: number;
}