import PageTemplate from "../PageTemplate/PageTemplate";
import FavotireEdu from "../ItemsComponents/FavoriteEdu";
import rabit from "../../assets/img/rabit.jpg";

const Favorits = () => {
  const data = [
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
  ];
  return (
    <PageTemplate
      ItemComponent={FavotireEdu}
      gridStyle={{
        gridTemplateColumns: `repeat(auto-fill, minmax(350px, 1fr)`,
        gap: "48px",
        width: "100%",
      }}
      data={data}
    />
  );
};

export default Favorits;
