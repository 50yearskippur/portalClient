import React from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import FavotireEdu from "../ItemsComponents/FavoriteEdu";
import { useState, useEffect } from "react";
//delete in production
import rabit from "../../assets/img/rabit.jpg";

const Favorits = () => {
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    // After connect to the api, change to get favorite from tha api
    setFavoritesData([
      {
        title: "ראשוןן",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 1",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 2",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 3",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 4",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 5",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 6",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 7",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 8",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 9",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 10",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 11",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים 12",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
    ]);
  };

  return (
    <PageTemplate
      style={{ width: "100%" }}
      ItemComponent={FavotireEdu}
      data={favoritesData}
      gapSize={2}
      numberOfItemsInLine={3}
    />
  );
};

export default Favorits;
