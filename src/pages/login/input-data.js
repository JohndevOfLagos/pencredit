export const inputs = [
   {
      id: 1,
      name: "email",
      placeholder: "Enter email address",
      label: "Email",
      errorMessage: "Email must be a valid address",
      pattern: "^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$",
      type: "email",

   },
   {
      id: 2,
      name: "password",
      placeholder: "Enter your password",
      label: "Password",
      errorMessage: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
      pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$",
      type: "password",
      
   }
]