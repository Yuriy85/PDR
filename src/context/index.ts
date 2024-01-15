import { createContext } from 'react';

export interface CurrentUserContextType {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>> | null;
  showBurger: boolean;
  setShowBurger: React.Dispatch<React.SetStateAction<boolean>> | null;
  endVideoId: string;
  setEndVideoId: React.Dispatch<React.SetStateAction<string>> | null;
}

export const AppDataContext = createContext<CurrentUserContextType>({
  error: '',
  setError: null,
  showBurger: false,
  setShowBurger: null,
  endVideoId: '',
  setEndVideoId: null,
});
