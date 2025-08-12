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
  errorCode?: string;
  timestamp?: string;
  processingTimeMs?: number;
  userId?: string;
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
      console.log('API endpoint:', '/api/early-access');
      
      let response;
      try {
        response = await fetch('/api/early-access', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        console.log('Fetch completed successfully');
      } catch (fetchError) {
        console.error('Fetch error:', fetchError);
        const errorMessage = 'Network error - failed to connect to server. Please check your internet connection and try again.';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }

      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      console.log('Response ok:', response.ok);

      // Check if response has content
      let responseText;
      try {
        responseText = await response.text();
        console.log('Response text length:', responseText.length);
        console.log('Response text:', responseText);
      } catch (textError) {
        console.error('Error reading response text:', textError);
        const errorMessage = 'Failed to read server response. Please try again.';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }
      
      if (!responseText || responseText.trim() === '') {
        console.error('Empty response received');
        const errorMessage = 'Empty response from server. Please try again or contact support if the problem persists.';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }

      let result: EarlyAccessResponse;
      try {
        result = JSON.parse(responseText);
        console.log('Parsed result:', result);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', responseText);
        console.error('Parse error:', parseError);
        const errorMessage = 'Invalid response format from server. Please try again or contact support.';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }

      // Handle API error responses (even with 200 status if success: false)
      if (!result.success) {
        const errorMessage = result.error || 'Failed to submit early access request';
        console.error('API returned error:', result);
        setError(errorMessage);
        return result;
      }

      // Handle HTTP error status codes
      if (!response.ok) {
        const errorMessage = result.error || `Server error (${response.status}). Please try again.`;
        console.error('Response not ok, error:', result);
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }

      console.log('Form submitted successfully');
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
