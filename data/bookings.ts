export interface Booking {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  status: "unconfirmed" | "confirmed" | "cancelled";
  hasBreakfast: boolean;
  isPaid: boolean;
  observations: string;
  cabinId: number;
  guestId: number;
}

const bookingsData: Booking[] = [
  {
    id: 1,
    created_at: "2025-03-05 15:40:30.39202+00",
    startDate: "2025-03-10 16:38:59",
    endDate: "2025-03-18 16:39:05",
    numNights: 5,
    numGuests: 4,
    cabinPrice: 300,
    extrasPrice: 60,
    totalPrice: 360,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: true,
    observations: "i will be late",
    cabinId: 1,
    guestId: 1,
  },
];

export default bookingsData;
