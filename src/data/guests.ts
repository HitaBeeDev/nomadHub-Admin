export interface Guest {
  id: number;
  created_at: string;
  fullName: string;
  email: string;
  nationalIdNumber: string;
  nationality: string;
}

const guestsData: Guest[] = [
  {
    id: 1,
    created_at: "2025-03-05 15:31:37.58669+00",
    fullName: "Anahita Amiri",
    email: "anahita.amiri10344@gmail.com",
    nationalIdNumber: "test001",
    nationality: "Turkiye",
  },
];

export default guestsData;
