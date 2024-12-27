import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import validateForm from "../../helpers/validate";
import useAuthStore from "../../store/AuthStore";

import style from './AuthPage.module.sass'
import Notifications from "../../components/Notification/Notifications";

const AuthPage = () => {
  const { user, signIn, error } = useAuthStore();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" })

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationResult = validateForm(form);
    
    if (!validationResult.isValid) {
      setErrors({
        email: validationResult.email,
        password: validationResult.password,
      });
    } else {
      await signIn(form)
      console.log(user)
    }
  }

  useEffect(() => {
    if(user) {
      navigate('/news')
    }
  }, [user])

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


  return(
    <div className={style.formContainer}>
      <Typography fontSize={28}>Авторизация</Typography>
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
            <Button onClick={() => navigate('/sign-up')}>Еще нет аккаунта?</Button>
            <Button type="submit" variant="contained">Авторизоваться</Button>
            </div>
          </form>
          {error && <Notifications message={error} />}
    </div>
  )
}

export default AuthPage;
