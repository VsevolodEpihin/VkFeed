import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import router from './router';
import theme from './theme';

import './normalize.css'

const App = () => {

  return (
    <>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router}/>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  )
}

export default App;
