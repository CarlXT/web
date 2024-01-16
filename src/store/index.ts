import { defineStore } from "pinia";

export * from "./dialog"

export const useStore = defineStore("global", () => {
  const errorMessage = "";
  const selectedRail = "dashboard";
  const rails: NavigationRailItem[] = [];
  const courses: string[] = [];

  const isMaintenance = true;
  const isLoggedIn = undefined as boolean | undefined;
  const isAdminLoggedIn = undefined as boolean | undefined;
  const isLoading = true;
  const isShowBackButton = false;
  const isDark = false;

  let checkoutDetails: CheckoutDetails | undefined;

  const role = -1;
  const user: StudentResponse = {
    id: 0,
    student_id: "",
    email_address: "",
    first_name: "",
    last_name: "",
    year_level: "",
    date_stamp: "",
  };

  const admin: StudentResponse = {
    id: 0,
    student_id: "",
    email_address: "",
    first_name: "",
    last_name: "",
    year_level: "",
    date_stamp: "",
  };

  return {
    isShowBackButton, isDark, isLoggedIn, isLoading, errorMessage, role,
    checkoutDetails, user, isAdminLoggedIn, rails, selectedRail, courses,
    admin, isMaintenance
  }
});