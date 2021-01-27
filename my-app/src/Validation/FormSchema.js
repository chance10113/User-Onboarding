import * as yup from "yup";

export default yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 chars long"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 chars long"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 chars long"),
  tOS: yup.boolean,
});
