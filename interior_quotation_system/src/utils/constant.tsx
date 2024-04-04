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
    ARTICLE: "/staff/article"
  },
   ADMIN: {
    MAIN: "/admin",
    USERS: "/admin/users",
    SETTINGS: "/admin/settings",
    // Add more admin routes as needed
  },
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
export const ADMIN_FORM_RULES = {
  username: FORM_RULES.required,
  password: FORM_RULES.required,
  fullname: FORM_RULES.required,
  birthdate: FORM_RULES.required,
  email: FORM_RULES.email,
  phoneNumber: FORM_RULES.required,
  roleId: FORM_RULES.required,
  status: {
    required: true,
    message: "Please select user status",
    type: "boolean",
  },
};
