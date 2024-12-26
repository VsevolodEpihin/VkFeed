import { createBrowserRouter } from 'react-router-dom';

import { INSIDE_ERROR } from '../constants';
import Login from '../components/Login/Login';
import ForbiddenPage from '../pages/ForbiddenPage/ForbiddenPage';
import AuthLayout from '../components/AuthLayout/AuthLayout';
import RegistrationPage from '../pages/RegistrationPage/RgistartionPage';

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
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <RegistrationPage />
  }
])

export default router;