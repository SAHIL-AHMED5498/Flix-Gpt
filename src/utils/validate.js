export const validate = (email, pass) => {
  const isValidPass =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{8,}$/.test(pass);

  const isValidEmail =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  if (!isValidEmail) {
    return "Please enter a valid email address (e.g., name@example.com).";
  }

  if (!isValidPass) {
    return "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.";
  }

  return null;
};
