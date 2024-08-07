import React from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import StockMedia from "../components/ItemsComponents/StockMedia";
import CollageMedia from "../components/ItemsComponents/CollageMedia";
import rabit from "../assets/img/rabit.jpg";
import usa from "../assets/img/usa.png";
import Search from "../components/Search/Search";

const MediaPage = () => {
  const data = [
    {
      title: "צבא",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: usa,
      mediaType: "image",
    },
    {
      title: "ביטחון מידע",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: usa,
      mediaType: "image",
    },
    {
      title: "תשתיות ובינוי",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "הדרכה",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "סייבר וטכנולוגיה",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "פיקוד ומנהיגות (ערכים)",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "גיאוגרפיה, שטח ושדה",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "שונות",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
  ];
  return (
    <div className="page-container">
      <div className="header" style={{ marginBottom: "4.1vh" }}>
        תמונות סטוק
      </div>
      <PageTemplate
        ItemComponent={StockMedia}
        numberOfItemsInLine={4}
        data={data}
        gapRowSizeInPx={32}
        gapColumnSizeInPercentage={2}
      />
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "3.963vh",
        }}
      >
        <div
          className="header"
          style={{ marginBottom: 0, marginTop: "5.185vh" }}
        >
          מדיה
        </div>
        <Search
          style={{
            width: "21.178vw",
            height: "3.369vh",
            paddingTop: "1px",
            paddingBottom: "1px",
          }}
        />
      </div>
      <PageTemplate
        ItemComponent={CollageMedia}
        numberOfItemsInLine={4}
        data={data}
        gapRowSizeInPx={25.681}
        gapColumnSizeInPercentage={3.2}
      />
    </div>
  );
};

export default MediaPage;
