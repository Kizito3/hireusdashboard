// import { VendorsResponse } from "@/pages/vendor/lib/useTotalVendors";
import {
  adminEndpoints,
  agentEndPoints,
  authEndpoints,
  summaryEndpoint,
  vendorsEndpoint,
} from "../axios";
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

// ===================================Agent authentications==================================

export const agentsignup = async (data: AgentSignUp, token: string) => {
  return await axiosPrivate.post<ApiResponse<null>>(
    agentEndPoints.signup,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const agentverifyemail = async (
  data: { verification_code: string },
  token: string
) => {
  return await axiosPrivate.post<ApiResponse<UserData>>(
    agentEndPoints.verify_email,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const resendagentemail = async (token: string) => {
  return await axiosPrivate.get<ApiResponse<null>>(
    agentEndPoints.resend_email_verification_code,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// ====================================================================================
export const returnSummary = async (token: string) => {
  return await axiosPrivate.get<ApiResponse<Summary>>(summaryEndpoint.summary, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllVendors = async (token: string) => {
  return await axiosPrivate.get<{ data: { vendors: VendorRealProps[] } }>(
    vendorsEndpoint.return_vendors,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getVendorProfile = async (token: string, _id: string) => {
  // Replace the "{vendorId}" placeholder with the actual vendor _id.
  return await axiosPrivate.get<{ data: { vendor: VendorRealProps } }>(
    vendorsEndpoint.vendor_profile.replace("{vendorId}", _id),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// =========================================================================================

export const addCompany = async (data: CompanyProps, token: string) => {
  return await axiosPrivate.post<ApiResponse<null>>(
    adminEndpoints.add_company,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
