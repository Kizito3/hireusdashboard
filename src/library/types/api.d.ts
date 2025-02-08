type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
};

//============= API REQUESTS ============= /
type SignUp = {
  account_type: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string[];
};

type Login = {
  account_type: string;
  email: string;
  password: string;
};

type EmailPayload = {
  account_type: string;
  email: string;
};
type ResetPassword = {
  new_password: string;
  confirm_password: string;
};

type AgentSignUp = {
  account_type: string;
  first_name: string;
  last_name: string;
  phone: string;
  promoCode?: string;
  email: string;
  password: string;
};
type Summary = {
  totalRiders: number;
  totalUsers: number;
  totalShipments: number;
  totalVendors: number;
};

type AgentLogin = {
  account_type: string;
  email: string;
  password: string;
};

type AgentEmailPayload = {
  account_type: string;
  email: string;
};

type AgentResetPassword = {
  new_password: string;
  confirm_password: string;
};

//============= COMPANY DATA ============= /
type CompanyProps = {
  account_type: string;
  company_name: string;
  contact: Contact;
  terms_of_service: boolean;
  password: string;
};

type Contact = {
  email: string;
  phone: string[];
  address: Address;
};

type Address = {
  country: string;
  city: string;
  postal_code: string;
  state: string;
  address_text: string;
};
