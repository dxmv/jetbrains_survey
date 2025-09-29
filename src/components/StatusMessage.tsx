import type { ReactNode } from 'react';

type StatusMessageProps = {
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
  loadingMessage?: string;
  children?: ReactNode;
  onRetry?: () => void;
};

const StatusMessage = ({
  loading = false,
  error = false,
  errorMessage,
  loadingMessage = 'Loading...',
  children,
  onRetry,
}: StatusMessageProps) => {
  if (!loading && !error) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <main className="status-screen" aria-busy="true" aria-live="polite">
        <p>{loadingMessage}</p>
      </main>
    );
  }

  return (
    <main className="status-screen" role="alert" aria-live="assertive">
      <p>{`Error: ${errorMessage || 'An unknown error occurred'}`}</p>
      {onRetry && (
        <button type="button" onClick={onRetry}>
          Retry
        </button>
      )}
    </main>
  );
};

export default StatusMessage;
