import { useState } from "react";
import { createContext } from "react";

const FavContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorit: (favoritemeetup) => {},
  removeFavorit: (meetupid) => {},
  itemFavorit: (meetupid) => {},
});

export function FaveContentProvider(props) {
  const [userfaveriout, setUserFaveriout] = useState([]);
  const addFavoritContent = (favoritemeetup) => {
    setUserFaveriout((previousData) => {
      return previousData.concat(favoritemeetup);
    });
  };

  const removeFavoritContent = (meetupid) => {
    setUserFaveriout((previousData) => {
      return previousData.filter((meetup) => meetup.id !== meetupid);
    });
  };

  const itemFaverioutContent = (meetupid) => {
    return userfaveriout.some((meetup) => meetup.id === meetupid);
  };

  const context = {
    favorites: userfaveriout,
    totalFavorites: userfaveriout.length,
    addFavorit: addFavoritContent,
    removeFavorit: removeFavoritContent,
    itemFavorit: itemFaverioutContent,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
