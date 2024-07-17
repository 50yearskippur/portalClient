import React from 'react';
import "./MediaAlbumPage.css";
import rabit from "../assets/img/rabit.jpg";
import party from "../assets/img/party.png";
import usa from "../assets/img/usa.png";
import MasonryLayout from "../components/MasonryLayout/MasonryLayout";
import TopSection from "../components/TopSection/TopSection";

const MediaAlbumPage = () => {
  const data = [
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: usa,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: usa,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: party,
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
      media: usa,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: party,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: usa,
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
      media: usa,
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
      media: party,
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
      media: party,
      mediaType: "image",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: usa,
      mediaType: "image",
    },
  ];
  return (
    <>
      <TopSection navigateTo={"/media"} title='פורימון בה"ד 15' />
      <div className="page-container">
        <MasonryLayout data={data} />
      </div>
    </>
  );
};

export default MediaAlbumPage;
