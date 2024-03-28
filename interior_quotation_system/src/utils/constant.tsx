export const PAGE_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  QUOTATION_FORM: "/quotation/form",
  HOME: "/",
  FORGOT_PASSWORD: "/forgot-password",

  STAFF: {
    MAIN: "/staff",
    PROJECTS: "/staff/projects",
    QUOTATIONS: "/staff/quotation",
    PRODUCT: "/staff/product",
    DASHBOARD: "/staff/dashboard",
  },
  ADMIN: {},
};

export const FORM_RULES = {
  required: {
    required: true,
    message: "This field is required",
  },
  email: {
    type: "email",
    message: "The value is invalid email",
  },
};
