interface ValidateFormProps {
  email: string;
  password: string 
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!$*])[A-Za-z\d!$*]{8,}$/;

const validateForm = ({email, password}: ValidateFormProps) => {
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password)

  const messages = {
    email: '',
    password: '',
    isValid: true,
  };

  if(email.length <= 0) {
    messages.email = 'required field';
    messages.isValid = false;
  } else if(!isValidEmail) {
    messages.email = 'email uncorrected';
    messages.isValid = false;
  }

  if(password.length <= 7) {
    messages.password = 'password must be more then 7';
    messages.isValid = false;
  } else if(!isValidPassword) {
    messages.password = 'must be used 1 symbol (!%*) and 1 capital letter'
    messages.isValid = false;
  }

  return messages;
}

export default validateForm;
