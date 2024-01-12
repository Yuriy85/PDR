import { useState } from 'react';

export const useFetching = <T>(
  callback: <T>(args: T) => Promise<unknown>
): [(...args: T[]) => Promise<void>, boolean, string] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (args: T) => {
    try {
      setIsLoading(true);
      setError('');
      await callback(args);
    } catch (e) {
      setError((e as ReferenceError).message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
