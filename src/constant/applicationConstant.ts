export const ApplicationConstant = {
  REFRESH_TOKEN: "refreshKey",
  LOGIN_PATH: "/login",
  REGISTER_PATH: "/register",
  HOME_PATH: "/home",
  USER_PATH: "/user",
  DASHBOARD_PATH: "/dashboard",
};

export const ApiConstant = {
  BASE_URL: "http://127.0.0.1:8000/",
  POST_NEW_USER: "accounts/user/signup/",
  AUTHENTICATE_USER: "accounts/user/token/",
  GET_NEW_ACCESS_TOKEN: "accounts/user/token/refresh/",
  GET_STUDENT_PROFILE_DASHBOARD: "students/dashboard-profile/",
  GET_FACULTY_PROFILE_DASHBOARD: "faculty/dashboard-profile/",
};
