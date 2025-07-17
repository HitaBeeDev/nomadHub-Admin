export interface Hub {
  id: number;
  created_at: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
}

const hubsData: Hub[] = [
  {
    id: 1,
    created_at: "2025-03-05 15:29:01.188562+00",
    name: "001",
    maxCapacity: 2,
    regularPrice: 300,
    discount: 50,
    description: "small luxury cabin",
    image: "@/assets/hubs/hub-1-001.jpg",
  },
  {
    id: 2,
    created_at: "2025-03-26 12:31:12.472741+00",
    name: "002",
    maxCapacity: 5,
    regularPrice: 500,
    discount: 80,
    description: "bla",
    image: "@/assets/hubs/hub-2-001.jpg",
  },
  {
    id: 3,
    created_at: "2025-03-26 13:32:46.339967+00",
    name: "003",
    maxCapacity: 3,
    regularPrice: 400,
    discount: 40,
    description: "bla",
    image: "@/assets/hubs/hub-3-001.jpg",
  },
  {
    id: 6,
    created_at: "2025-03-26 13:54:56.193471+00",
    name: "004",
    maxCapacity: 5,
    regularPrice: 343,
    discount: 32,
    description: "tetetet",
    image: "@/assets/hubs/hub-4-001.jpg",
  },
  {
    id: 17,
    created_at: "2025-03-29 11:33:38.530037+00",
    name: "005",
    maxCapacity: 2,
    regularPrice: 100,
    discount: 0,
    description: "rooom",
    image: "@/assets/hubs/hub-5-001.jpg",
  },
  {
    id: 18,
    created_at: "2025-03-29 12:13:41.760869+00",
    name: "Copy of 005",
    maxCapacity: 2,
    regularPrice: 100,
    discount: 0,
    description: "rooom",
    image: "@/assets/hubs/hub-6-001.jpg",
  },
];

export default hubsData;
