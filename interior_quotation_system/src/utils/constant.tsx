export const PAGE_ROUTES = {
  LOGIN: "/",
  REGISTER: "/register",
  QUOTATION_FORM: "/quotation/form",
  HOME: "/home",
  FORGOT_PASSWORD: "/forgot-password",

  STAFF: {
    MAIN: "/staff",
    PROJECTS: "/staff/projects",
    QUOTATIONS: "/staff/quotation",
    PRODUCTS: "/staff/products",
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
