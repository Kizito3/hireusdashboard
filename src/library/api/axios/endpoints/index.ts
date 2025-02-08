/** Server endpoints for authenticaion requests */
export const authEndpoints = {
  /** `POST` : Sign up route*/
  signup: "/auth/sign-up",

  /** `POST` : Login route*/
  login: "/auth/login",

  /** `POST` : Email verification route*/
  verify_email: "/auth/verify-email",

  /** `POST` : Forgot password route*/
  forgot_password: "/auth/forgot-password",

  /** `PUT` : Reset password route*/
  reset_password: "/auth/reset-password",

  /** `POST` : Verify reset password code route*/
  verify_password_reset_code: "/auth/verify-password-reset-code",

  /** `GET` : Resend reset password code route*/
  resend_password_reset_code: "/auth/password/resend-code",

  /** `GET` : Resend email verification code route*/
  resend_email_verification_code: "/auth/email/resend-code",
};

export const userEndPoints = {
  /** `GET` : Profile lookup route */
  profile: "/u/profile",

  /** `POST` : Logout route */
  logout: "/a/sign-out",

  /** `GET` : Refresh token route */
  refresh: "/a/refresh-token",
};

export const agentEndPoints = {
  /** `POST`: Add agent route */
  signup: "/agent/register",

  /** `POST`: Agent login route */
  login: "/agent/login",

  /** `POST`: Agent email verification route */
  verify_email: "/agent/verify-email",

  /** `POST`: Agent forgot password route  */
  forgot_password: "/agent/forgot-password",

  /** `GET`: Agent resend email route */
  resend_email_verification_code: "agent/email/resend-code",

  /** `GET`: Resend agent reset password code route  */
  resend_password_reset_code: "/agent/password/resend-code",

  /** `POST`: Verifies password reset code route */
  verify_password_reset_code: "/agent/verify-password-reset-code",

  /** `PUT`: Resets forgotten password route */
  reset_password: "/agent/reset-password",

  /** `GET`: Agent profile lookup route */
  agent_profile: "/agent/profile",
};

export const vendorsEndpoint = {
  /** `GET`: Get all vendors route */
  return_vendors: "/v/vendors",

  /** `GET`: Get vendor's profile route */
  vendor_profile: "/v/{vendorId}/profile",
};

export const summaryEndpoint = {
  /** `GET`: Vendor profile lookup route */
  summary: "/a/summary",
};

export const adminEndpoints = {
  /** `POST`: Admin Add Company route */
  add_company: "/a/company",
};
