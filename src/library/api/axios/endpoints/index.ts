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
