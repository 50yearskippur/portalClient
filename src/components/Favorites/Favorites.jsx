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
      ItemComponent={FavotireEdu}
      gridStyle={{
        gridTemplateColumns: `repeat(auto-fill, minmax(350px, 1fr)`,
        gap: "48px",
        width: "100%",
      }}
      data={favoritesData}
    />
  );
};

export default Favorits;
