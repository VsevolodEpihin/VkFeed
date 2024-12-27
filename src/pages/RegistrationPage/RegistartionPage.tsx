import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import validateForm from "../../helpers/validate";
import useAuthStore from "../../store/AuthStore";

import style from './RegistrationPage.module.sass'
import Notifications from "../../components/Notification/Notifications";

const RegistrationPage = () => {
  const { signUp, error } = useAuthStore();

  const navigate = useNavigate()

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = validateForm(form);

    if (!validationResult.isValid) {
      setErrors({
        email: validationResult.email,
        password: validationResult.password,
      });
    } else {
      await signUp(form)
      navigate('/news')
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));

    const fieldValidation = validateForm({ ...form, [id]: value });
    setErrors((prev) => ({
      ...prev,
      [id]: fieldValidation[id as keyof typeof errors],
    }));
  };

  return (
    <div className={style.formContainer}>
      <Typography fontSize={28}>Регистрация</Typography>
          <form className={style.form} onSubmit={handleSubmit}>
            <TextField
              id="email"
              placeholder="email"
              variant="outlined"
              margin="normal"
              required   
              fullWidth
              autoComplete="email"
              autoFocus
              value={form.email}
              error={!!errors.email}
              onChange={handleChange}
              helperText={errors.email}
            />
            <TextField
              id="password"
              placeholder="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoComplete="password"
              autoFocus
              value={form.password}
              error={!!errors.password}
              onChange={handleChange}
              helperText={errors.password}
            />
            <div className={style.containerBtn}>
            <Button onClick={() => navigate('/sign-in')}>Уже есть аккаунт?</Button>
            <Button type="submit" variant="contained">Регистрация</Button>
            </div>
          </form>
          {error && <Notifications message={error} /> }
    </div>
  )
}

export default RegistrationPage;
