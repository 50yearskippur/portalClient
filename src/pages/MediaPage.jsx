import "./MediaPage.css";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import StockMedia from "../components/ItemsComponents/StockMedia";
import CollageMedia from "../components/ItemsComponents/CollageMedia";
import rabit from "../assets/img/rabit.jpg";

const MediaPage = () => {
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
    <div className="media-page-container">
      <div className="media-page-header">תמונת סטוק</div>
      <PageTemplate
        ItemComponent={StockMedia}
        gridStyle={{
          gridTemplateColumns: `repeat(auto-fill, minmax(175px, 1fr)`,
          gap: "34px",
        }}
        data={data}
      />

      <div className="media-page-header">מדיה</div>
      <PageTemplate
        ItemComponent={CollageMedia}
        gridStyle={{
          gridTemplateColumns: `repeat(auto-fill, minmax(225px, 1fr)`,
          gap: "40px",
        }}
        data={data}
      />
    </div>
  );
};

export default MediaPage;