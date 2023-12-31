import { createContext } from 'react';

export interface CurrentUserContextType {
  showBurger: boolean;
  setShowBurger: React.Dispatch<React.SetStateAction<boolean>> | null;
}

export const AppDataContext = createContext<CurrentUserContextType>({
  showBurger: false,
  setShowBurger: null,
});
