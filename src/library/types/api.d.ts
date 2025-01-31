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
