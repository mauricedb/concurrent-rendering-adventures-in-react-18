import { FallbackProps } from 'react-error-boundary';
import classes from './ErrorFallback.module.css';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div
      className={`alert alert-danger m-auto ${classes.ErrorFallback}`}
      role="alert"
    >
      <h4 className="alert-heading">
        ⚠ Oops, something went wrong
        <button
          type="button"
          className="btn-close float-end"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={resetErrorBoundary}
        ></button>
      </h4>
      <hr />
      {error.message}
    </div>
  );
}
