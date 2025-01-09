import { authEndpoints } from "../axios";
import { axiosPrivate } from "../axios/config";

// Authentication Queries

export const signup = async (data: SignUp) => {
  // done with this
  return await axiosPrivate.post<ApiResponse<null>>(authEndpoints.signup, data);
};

export const login = async (data: Login) => {
  // done with this as well
  return await axiosPrivate.post<ApiResponse<UserData>>(
    authEndpoints.login,
    data
  );
};

export const forgotPassword = async (data: EmailPayload) => {
  //done with this
  return await axiosPrivate.post<ApiResponse<null>>(
    authEndpoints.forgot_password,
    data
  );
};

//==========================================================================================================
export const verifyEmail = async (
  data: { verification_code: string },
  token: string
) => {
  // done with this as well
  return await axiosPrivate.post<ApiResponse<UserData>>(
    authEndpoints.verify_email,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const resendEmailToken = async (token: string) => {
  return await axiosPrivate.get<ApiResponse<null>>(
    authEndpoints.resend_email_verification_code,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const verifyPasswordResetCode = async (
  data: { password_reset_code: string },
  token: string
) => {
  return await axiosPrivate.post<ApiResponse<UserData>>(
    authEndpoints.verify_password_reset_code,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const resetPassword = async (data: ResetPassword, token: string) => {
  return await axiosPrivate.put<ApiResponse<UserData>>(
    authEndpoints.reset_password,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const resendPasswordResetToken = async (token: string) => {
  return await axiosPrivate.get<ApiResponse<null>>(
    authEndpoints.resend_password_reset_code,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
