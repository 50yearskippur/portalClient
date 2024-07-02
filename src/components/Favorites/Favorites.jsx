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
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
        type: "משחק",
        subSubject: {
          title: "זירת סוריה",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "טילים עם סלים",
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
