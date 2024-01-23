import { createContext } from 'react';

export interface CurrentUserContextType {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>> | null;
  idInPlay: string;
  setIdInPlay: React.Dispatch<React.SetStateAction<string>> | null;
}

export const AppDataContext = createContext<CurrentUserContextType>({
  error: '',
  setError: null,
  idInPlay: '',
  setIdInPlay: null,
});
