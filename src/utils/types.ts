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

export interface StudentProfileType {
  id: string;
  firstName: string;
  lastName: string;
  studentDetail: {
    id: string;
    whatsappMobile: string;
    alternateMobile: string;
    address: string;
    profilePic: string;
    resume: string;
    placementGuidelineForm: string;
    schoolMedium: string;
    twelvePercent: string;
    diplomaPercent: null | string;
    tenPercent: string | null;
    enrollmentNumber: string;
    college: string;
    branch: string;
    passingYear: number;
    currentCGPA: string;
    currentBacklog: number;
    totalBacklog: number;
    isCompleted: boolean;
    isVerified: boolean;
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
    studentId: string;
  } | null;
  mobile: string;
  email: string;
  isStudent: boolean;
  isStaff: boolean;
}

export interface FacultyProfileType {
  id: string;
  firstName: string;
  lastName: string;
  facultyDetail: {
    id: string;
    address: string;
    profilePic: string;
    alternateMobile: string;
    alternateEmail: string;
    createdAt: string;
    updatedAt: string;
    facultyId: string;
    isCompleted: boolean;
  } | null;
  mobile: string;
  email: string;
  isStudent: boolean;
  isStaff: boolean;
}

export interface SidebarRoutesType {
  path?: string;
  state: string;
  child?: NestedSidebarProps[];
  icon: ReactNode;
}

export interface NestedSidebarProps {
  path: string;
  state: string;
}

export interface CompanyDetailListType {
  count: number;
  next: string | null;
  previous: string | null;
  results: SingleCompanyItemType[];
}

export interface SingleCompanyItemType {
  id: string;
  name: string;
  location: string;
  website: string;
  deadline: string;
  description: string;
  isClosed: boolean;
  updatedAt: string;
  companyDocument: {
    id: string;
    document: string;
    updatedAt: string;
  }[];
}
