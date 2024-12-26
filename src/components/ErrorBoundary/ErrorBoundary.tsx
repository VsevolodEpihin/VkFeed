import { Component, ReactNode } from 'react';

import { NOT_ACCESS, SOMETHING_WRONG } from '../../constants';
import ForbiddenPage from '../../pages/ForbiddenPage/ForbiddenPage';

interface StateErrorBoundary {
  hasError: boolean;
  noAccess: boolean;
}

interface PropsErrorBoundary {
  errorComponent?: ReactNode;
  children?: ReactNode;
}

class ErrorBoundary extends Component<PropsErrorBoundary, StateErrorBoundary> {
  constructor(props: PropsErrorBoundary) {
    super(props);
    this.state = {hasError: false, noAccess: false}
  }

  getDerivedStateFromError(error: Error) {
    this.state = {hasError: true, noAccess: error.message.includes(NOT_ACCESS)}
  }

  render() {
    const {
      state: { hasError, noAccess },
      props: { errorComponent, children },
    } = this;
    if(hasError) {
      if(noAccess) {
       return <ForbiddenPage />
      }
      return errorComponent || <ForbiddenPage message={SOMETHING_WRONG}/>
    }
    return children;
  }
}

export default ErrorBoundary;
