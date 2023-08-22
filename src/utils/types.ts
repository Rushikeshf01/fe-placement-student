// Types decraled here

export interface LoginInputType {
  email: string;
  password: string;
  captcha: string;
}

export interface UserDetailType {
  refresh: string;
  access: string;
  isAuthenticated: boolean
  user: {
    id: string;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    // password: "pbkdf2_sha256$390000$HJsKynAjb7TSFDBK5WUmyd$E8aI7qzRIMiyyCwfQ7vBaEH4WTcDZGlXhM2r+PG6br0=";
    isStudent: boolean;
    isStaff: boolean;
    // isAdmin: false;
    // createdAt: "2023-08-22T06:19:37.865244Z";
    updatedAt: "2023-08-22T06:19:37.865244Z";
  };
}
