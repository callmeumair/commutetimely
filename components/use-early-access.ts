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
      console.log('Submitting early access data:', data);
      
      let response;
      try {
        response = await fetch('/api/early-access', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      } catch (fetchError) {
        console.error('Fetch error:', fetchError);
        throw new Error('Network error - failed to connect to server');
      }

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      // Check if response has content
      let responseText;
      try {
        responseText = await response.text();
      } catch (textError) {
        console.error('Error reading response text:', textError);
        throw new Error('Failed to read server response');
      }
      
      console.log('Response text:', responseText);
      
      if (!responseText) {
        throw new Error('Empty response from server');
      }

      let result;
      try {
        result = JSON.parse(responseText);
        console.log('Parsed result:', result);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', responseText);
        throw new Error('Invalid response format from server');
      }

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit early access request');
      }

      setIsSubmitted(true);
      return result;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      console.error('Error in submitEarlyAccess:', err);
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
