import { authEndpoints } from "../axios";
import { axiosPrivate, axiosWithToken } from "../axios/config";

// Authentication Queries
export const signup = async (data: SignUp) => {
  return await axiosPrivate.post<ApiResponse<null>>(authEndpoints.signup, data);
};

export const verifyEmail = async (data: { verification_code: string }) => {
  return await axiosWithToken.post<ApiResponse<UserData>>(
    authEndpoints.verify_email,
    data
  );
};

export const resendEmailToken = async () => {
  return await axiosWithToken.get<ApiResponse<null>>(
    authEndpoints.resend_email_verification_code
  );
};

export const login = async (data: Login) => {
  return await axiosPrivate.post<ApiResponse<UserData>>(
    authEndpoints.login,
    data
  );
};

export const forgotPassword = async (data: EmailPayload) => {
  return await axiosWithToken.post<ApiResponse<null>>(
    authEndpoints.forgot_password,
    data
  );
};

export const resendPasswordResetToken = async () => {
  return await axiosWithToken.get<ApiResponse<null>>(
    authEndpoints.resend_password_reset_code
  );
};
