import { createBrowserRouter } from 'react-router-dom';

import { INSIDE_ERROR } from '../constants';
import ForbiddenPage from '../pages/ForbiddenPage/ForbiddenPage';
import AuthLayout from '../components/AuthLayout/AuthLayout';
import RegistrationPage from '../pages/RegistrationPage/RegistartionPage';
import AuthPage from '../pages/AuthPage/AuthPage';
import News from '../pages/News/News';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <AuthLayout />,
    errorElement: (
      <ForbiddenPage
        message={INSIDE_ERROR}
      />
    ),
  },
  {
    path: '/sign-in',
    element: <AuthPage />
  },
  {
    path: '/sign-up',
    element: <RegistrationPage />
  },
  {
    path: '/news',
    element: <News />
  }
])

export default router;