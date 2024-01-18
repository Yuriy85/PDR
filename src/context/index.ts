import { createContext } from 'react';

export interface CurrentUserContextType {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>> | null;
  endVideoId: string;
  setEndVideoId: React.Dispatch<React.SetStateAction<string>> | null;
}

export const AppDataContext = createContext<CurrentUserContextType>({
  error: '',
  setError: null,
  endVideoId: '',
  setEndVideoId: null,
});
