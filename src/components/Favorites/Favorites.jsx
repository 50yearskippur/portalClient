import React from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';
import FavotireEdu from '../ItemsComponents/FavoriteEdu';
import { useState, useEffect } from 'react';
//delete in production
import recommendedEduResource from '../../constants/recommended';

const Favorits = () => {
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    // After connect to the api, change to get favorite from tha api
    setFavoritesData(recommendedEduResource);
  };

  return (
    <PageTemplate
      style={{ width: '100%' }}
      ItemComponent={FavotireEdu}
      data={favoritesData}
      gapRowSizeInPx={30}
      gapColumnSizeInPercentage={2}
      numberOfItemsInLine={3}
    />
  );
};

export default Favorits;
