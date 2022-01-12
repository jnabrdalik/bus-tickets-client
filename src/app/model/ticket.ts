import { Journey } from "./journey";

export interface Ticket {
  firstName: string;
  lastName: string;
  seatNumber: number;
  journey: Journey;
}