import PageTemplate from "../PageTemplate/PageTemplate";
import rabit from "../../assets/img/rabit.jpg";
const Gallery = () => {
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
      ItemComponent={ItemComponent}
      gridStyle={{
        gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr)`,
        gap: "48px",
      }}
      data={data}
    />
  );
};

export default Gallery;
