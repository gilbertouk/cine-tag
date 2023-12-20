import { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext();
FavoritesContext.displayName = 'Favorites';

const FavoritesProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
