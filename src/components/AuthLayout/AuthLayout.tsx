import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

import style from './AuthLayout.module.sass';

const AuthLayout = () => {
  const navigate = useNavigate();

  return(
    <div className={style.container}>
      <div className={style.containerStart}>
        <Typography fontSize={28}>Welcome to VKFeed!
        </Typography>
        <Button
          type="button"
          variant="contained"
          color="primary"
          className={style.ctaButton}
          onClick={() => navigate('/sign-up')}
        >Создать аккаунт</Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          className={style.ctaButton}
          onClick={() => navigate('/sign-in')}
        >Войти</Button>
        </div>
    </div>
  )
}

export default AuthLayout;
