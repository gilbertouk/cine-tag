import { useContext } from 'react';
import { FavoritesContext } from '../context/Favorites';

const useFavoriteContext = () => {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  const addFavorite = (newFavorite) => {
    const favoriteExist = favorite.some((item) => item.id === newFavorite.id);

    if (!favoriteExist) {
      return setFavorite([...favorite, newFavorite]);
    }

    return setFavorite(favorite.filter((item) => item.id !== newFavorite.id));
  };
  return {
    favorite,
    addFavorite,
  };
};

export default useFavoriteContext;
