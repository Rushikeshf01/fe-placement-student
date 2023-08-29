export const ApplicationConstant = {
  REFRESH_TOKEN: "refreshKey",
  LOGIN_PATH: "/login",
  REGISTER_PATH: "/register",
  DASHBOARD_PATH: "/dashboard",
  STUDENT_PROFILE_PATH: "/dashboard/student/profile"
};

export const ApiConstant = {
  BASE_URL: "http://127.0.0.1:8000/",
  POST_NEW_USER: "account/user/signup/",
  AUTHENTICATE_USER: "account/user/token/",
  GET_NEW_ACCESS_TOKEN: "account/user/token/refresh/",
  GET_STUDENT_PROFILE: "student/profile/",
  GET_FACULTY_PROFILE: "faculty/profile/",
};
