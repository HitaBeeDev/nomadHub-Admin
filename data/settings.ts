export interface Setting {
  id: number;
  created_at: string;
  minimumBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}

const settingsData: Setting[] = [
  {
    id: 1,
    created_at: "2025-03-05 15:33:42.814452+00",
    minimumBookingLength: 4,
    maxBookingLength: 90,
    maxGuestsPerBooking: 8,
    breakfastPrice: 15,
  },
];

export default settingsData;
