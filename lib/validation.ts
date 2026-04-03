import { isValidPhoneNumber } from "libphonenumber-js";

// Email validation - Gmail .com only
export const validateEmail = (email: string): string | null => {
  if (!email) {
    return "Email is required";
  }

  // Check if email is a valid Gmail .com address
  const gmailRegex = /^[a-zA-Z0-9._%-]+@gmail\.com$/;
  if (!gmailRegex.test(email)) {
    return "Please use a valid Gmail (.com) address";
  }

  return null;
};

// International phone validation
export const validatePhone = (phone: string): string | null => {
  if (!phone) {
    return "Phone number is required";
  }

  // Use libphonenumber-js for international validation
  if (!isValidPhoneNumber(phone)) {
    return "Please enter a valid phone number";
  }

  return null;
};

// OTP validation
export const validateOTP = (otp: string): string | null => {
  if (!otp) {
    return "OTP is required";
  }

  if (otp.length !== 6) {
    return "OTP must be 6 digits";
  }

  if (!/^\d{6}$/.test(otp)) {
    return "OTP must contain only numbers";
  }

  return null;
};
