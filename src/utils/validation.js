export const validateField = (field, value, allValues) => {
  if (field.required && !value) return "This field is required";
  if (field.minLength && value.length < field.minLength)
    return `Minimum ${field.minLength} characters`;
  if (field.maxLength && value.length > field.maxLength)
    return `Maximum ${field.maxLength} characters`;
  if (field.pattern && !field.pattern.test(value))
    return "Invalid format";
  if (field.min && Number(value) < field.min)
    return `Minimum value is ${field.min}`;
  if (field.max && Number(value) > field.max)
    return `Maximum value is ${field.max}`;
  if (field.name === "confirmPassword" && value !== allValues.password)
    return "Passwords do not match";
  return "";
};
