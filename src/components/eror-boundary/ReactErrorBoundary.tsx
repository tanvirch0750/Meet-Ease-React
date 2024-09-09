import ErrorPage from '@/pages/error/ErrorPage';
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function ReactErrorBoundary(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, errorInfo) => {
        // log the error
        console.log('Error caught!');
        console.error(error);
        console.error(errorInfo);

        // record the error in an APM tool...
      }}
    >
      {props.children}
    </ErrorBoundary>
  );
}
