// Helper function for password strength
const validatePasswordStrength = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasMinLength = password.length >= 8;
  return hasUpperCase && hasLowerCase && hasNumber && hasMinLength;
};
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const fetchPosts = async (page, limit) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  const data = await response.json();
  return data;
};

export { validatePasswordStrength, validateEmail, fetchPosts };
