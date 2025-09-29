import type { ReactNode } from 'react';

type StatusMessageProps = {
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
  loadingMessage?: string;
  children?: ReactNode;
};

const StatusMessage = ({
  loading = false,
  error = false,
  errorMessage,
  loadingMessage = 'Loading...',
  children,
}: StatusMessageProps) => {
  if (!loading && !error) {
    return <>{children}</>;
  }

  const message = error
    ? `Error: ${errorMessage || 'An unknown error occurred'}`
    : loadingMessage;

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {message}
    </main>
  );
};

export default StatusMessage;
