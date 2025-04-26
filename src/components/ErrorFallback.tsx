import React from 'react';

interface ErrorFallbackProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-6 bg-red-50 rounded-lg">
      <div className="text-red-600 text-5xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-red-700 mb-2">حدث خطأ ما</h2>
      <p className="text-red-600 mb-6 text-center">
        نعتذر عن هذا الخطأ. يرجى المحاولة مرة أخرى لاحقاً.
      </p>
      {resetErrorBoundary && (
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          إعادة المحاولة
        </button>
      )}
    </div>
  );
};

export default ErrorFallback;
