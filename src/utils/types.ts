// Types decraled here
import { ReactNode } from "react";

export interface LoginInputType {
  email: string;
  password: string;
  captcha: string;
}

export interface RegisterInputType {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword: string;
  captcha: string;
}

export interface UserDetailType {
  refresh: string;
  access: string;
  isAuthenticated: boolean;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    isStudent: boolean;
    isStaff: boolean;
    updatedAt: "2023-08-22T06:19:37.865244Z";
  };
}

export interface SidebarRoutesType {
  path: string;
  element: ReactNode;
  state: string;
  sidebarProps: {
    displayText: string,
    icon?: ReactNode;
  }

}
