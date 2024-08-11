import { useNavigate } from "react-router-dom";
import FileController from "../../Media/FileController";
import "./ForYouItem.css";
import rabit from "../../../assets/img/rabit.jpg";
import React, { useEffect } from "react";

const ForYouItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="for-you-item-container">
      <div
        className="for-you-item-details"
        onClick={() =>
          navigate("/subSubject", {
            // state: {
            //   item: {
            //     files: { media: { media: rabit, mediaType: "image" } },
            //     mediaType: "image",
            //     subSubject: { title: "זירת דוגמה" },
            //     title: "קיפודים עם סלים",
            //     type: "משחק",
            //   },
            // },
          })
        }
      >
        <FileController
          item={item.eduResourse[0].files}
          style={{ width: "8.3vw", borderRadius: "6px", height: "9.6vh" }}
        />
        <div className="for-you-item-content">
          <div className="for-you-item-title">{item.title}</div>
          <div className="for-you-item-description">{item.description}</div>
        </div>
      </div>
      <div className="for-you-item-edu-container">
        {item.eduResourse.slice(1, 4).map((edu, index) => (
          <div className="for-you-item-edu-img" key={`edu${index}`}>
            <FileController
              key={`edu${index}`}
              item={edu.files}
              style={{
                width: "4.2vw",
                height: "4.8vh",
                borderRadius: "3px",
              }}
              gradientStyle={{
                height: index === 2 ? "100%" : "0%",
                backgroundColor: index === 2 && "#18132B99",
              }}
            />
            {index === 2 && (
              <div className="for-you-item-edu-number">{`+${
                item.eduResourse.length - 3
              }`}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ForYouItem;
