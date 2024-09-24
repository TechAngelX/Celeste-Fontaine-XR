export const required = (value) =>
    value || (typeof value === "number" && value === 0)
        ? undefined
        : "This field is required";

export const number = (value) =>
    value && isNaN(Number(value)) ? "Must be a number" : undefined;

export const digit = (value) =>
    value && !/^[0-9]*$/.test(value) ? "Must be a number" : undefined;

const maxLength = (max) => (value) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

const minLength = (min) => (value) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const maxLength30 = maxLength(30);
export const minLength8 = minLength(8);

export const maxLengthOTP = maxLength(6);
export const maxLengthMobileNo = maxLength(15);
export const maxLength20 = maxLength(20);
export const maxLength50 = maxLength(50);
export const maxLength150 = maxLength(150);
export const maxLength500 = maxLength(500);
export const maxLength1000 = maxLength(1000);
export const maxLength800 = maxLength(800);

export const minLengthMobileNo = minLength(5);
export const minLengthOTP = minLength(6);

export const email = (value) =>
    value && !/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i.test(value)
        ? "Invalid email address"
        : undefined;

export const name = (value) =>
    value && !/^[a-zA-Z\s]*$/i.test(value) ? "Invalid name" : undefined;

export const isOverEighteen = (date) => {
  let birthday = new Date(date);
  let age = Math.floor((new Date().getTime() - birthday.getTime()) / 31536000000);
  return age >= 18 ? undefined : "You must be at least 18 years old.";
};
