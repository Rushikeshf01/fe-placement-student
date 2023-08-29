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
  POST_NEW_USER: "account/user/signup/",
  AUTHENTICATE_USER: "account/user/token/",
  GET_NEW_ACCESS_TOKEN: "account/user/token/refresh/",
  GET_STUDENT_PROFILE: "student/profile/",
  GET_FACULTY_PROFILE: "faculty/profile/",
};
