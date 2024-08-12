import React from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import StockMedia from "../components/ItemsComponents/StockMedia";
import CollageMedia from "../components/ItemsComponents/CollageMedia";
import Search from "../components/Search/Search";
import media from "../constants/media";

const MediaPage = () => {

  return (
    <div className="page-container">
      <div className="header" style={{ marginBottom: "4.1vh" }}>
        תמונות סטוק
      </div>
      <PageTemplate
        ItemComponent={StockMedia}
        numberOfItemsInLine={4}
        data={media}
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
        placeholder={"חיפוש חופשי"}
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
        data={media}
        gapRowSizeInPx={25.681}
        gapColumnSizeInPercentage={3.2}
      />
    </div>
  );
};

export default MediaPage;
