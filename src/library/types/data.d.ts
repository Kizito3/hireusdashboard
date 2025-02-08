type RidersAccountTypes = {
  total: number | string;
  text: string;
  icon: IconType;
};

type CardProps = {
  total: number;
  icon: IconType;
  info: string;
};

type DataProps = {
  navName: string;
  icon: IconType;
  link: string;
};

type RiderAccountProps = {
  id: number;
  vendor: string;
  date: string;
  earnings: number;
  percentage: number;
  time: string;
};

type RidersProps = {
  id: number;
  name: string;
  number: number;
  email: string;
  location: string;
  shipment: number;
  payment: string;
  status?: string;
  color?: string;
  active?: string;
};
type TableProps = {
  id: number;
  vendor: string;
  riders: string;
  dropoff: string;
  pickup: string;
  date: string;
  time: string;
  Status: string;
  border?: string;
  textColor?: string;
  to: string;
  link: string;
};

type VendorProps = {
  _id: string;
  fullName: string;
  state: string;
  phone: number;
  email: string;
  // addresses: Address[] | [];
  plan: string;
  shipment: number;
};

type VendorRealProps = {
  _id: string;
  fullName: string;
  state: string;
  phone: number;
  email: string;
  addresses: Address[] | [];
  plan: string;
  shipment: number;
  payments: Payments;
  totalShipments: number;
  totalPayments: number;
};

type Payments = {
  _id: string;
  ref: string;
  shipment_tracking: string;
  amount: string;
  type: string;
  status: boolean;
  transaction_id: string;
  initiatedAt: string | Date;
  completedAt: string | Date;
};

type shipmentProps = {
  id: number;
  name: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  status: string;
  border: string;
  textColor: string;
  to?: string;
};

type Roles = "admin" | "x-admin" | "company" | "vendor" | "personal" | "agent";

type User = {
  _id: string;
  avatarUrl: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string[];
  state_of_residence: string;
  account_type: string;
  roles: Roles[];
  addresses: Address[] | [];
  createdAt: string | Date;
  updatedAt: string | Date;
  fullName: string;
};

type Address = {
  id: string;
  location: {
    type: string;
    coordinates: number[];
  };
  longitude: number;
  latitude: number;
  name?: string;
  country: string;
  state: string;
};

type UserData = { user: User };
