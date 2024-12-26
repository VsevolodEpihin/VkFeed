import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import useAuthStore from '../../store/AuthStore';

import style from './ForbiddenPage.module.sass';

interface ForbiddenPageProps {
  message?: string;
}

const ForbiddenPage = ({ message }: ForbiddenPageProps) => {
  const { user } = useAuthStore();
  const navigate = useNavigate()
  return (
    <div className={style}>
      <Alert severity='error'>{message}</Alert>
      <Button
        onClick={() => navigate(user ? '/news':'/sign-in')}
      >
        {user ? 'На главную' : 'Войти'}
      </Button>
    </div>
  )
}

export default ForbiddenPage;