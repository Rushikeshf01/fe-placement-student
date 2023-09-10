export const ApplicationConstant = {
  REFRESH_TOKEN: "refreshKey",

  // main routes
  LOGIN_PATH: "/login",
  REGISTER_PATH: "/register",
  DASHBOARD_PATH: "/dashboard",

  // student routes
  STUDENT_DASHBOARD_PATH: "/dashboard/student",
  STUDENT_PROFILE_PATH: "/dashboard/student/profile",
  STUDENT_COMPANY_PATH: "/dashboard/student/company",

  // faculty routes
  FACULTY_DASHBOARD_PATH: "/dashboard/faculty",
  FACULTY_PROFILE_PATH: "/dashboard/faculty/profile",
  // FACULTY_COMPANY_PATH: "/dashboard/faculty/company",

  //company apply routes
  STUDENT_APPLY_PATH: "/dashboard/student/company/[companyId]/apply"
};

export const ApiConstant = {
  BASE_URL: "http://127.0.0.1:8000/",

  // account url
  POST_NEW_USER: "account/user/post/",
  UPDATE_NEW_USER: "account/user/update/",
  AUTHENTICATE_USER: "account/user/token/",
  GET_NEW_ACCESS_TOKEN: "account/user/token/refresh/",

  // student url
  GET_STUDENT_PROFILE: "student/profile/",

  // faculty url
  GET_FACULTY_PROFILE: "faculty/profile/",

  // company url
  GET_COMPANY_DETAIL: "company/profile/",
};
