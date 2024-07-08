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
