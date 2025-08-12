import { useState } from 'react';

interface EarlyAccessData {
  email: string;
  name?: string;
  useCase?: string;
  location?: string;
  commuteChallenge?: string;
  device?: string;
}

interface EarlyAccessResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export function useEarlyAccess() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitEarlyAccess = async (data: EarlyAccessData): Promise<EarlyAccessResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit early access request');
      }

      setIsSubmitted(true);
      return result;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsSubmitted(false);
    setError(null);
  };

  return {
    isLoading,
    isSubmitted,
    error,
    submitEarlyAccess,
    reset,
  };
}
