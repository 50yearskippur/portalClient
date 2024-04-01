import React, { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf";
import "./ShowFullPdf.css";
import downloadBox from "../../assets/media/Icons/downloadBox.png";

const ShowFullPdf = ({ pdfDetails }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const documentRef = useRef();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (numPages) {
        const { scrollTop, scrollHeight, clientHeight } = documentRef.current;
        const scrolled = scrollTop / (scrollHeight - clientHeight);
        setCurrentPage(Math.max(1, Math.ceil(scrolled * numPages)));
      }
    };

    documentRef.current.addEventListener("scroll", handleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", handleScroll);
  }, [numPages]);

  return (
    <>
      <div className="pdf-information">
        <p className="pdf-title">{pdfDetails.title}</p>
        <p className="pdf-page-number">
          דף {currentPage} מתוך {numPages}
        </p>
      </div>
      <img
        className="download-icon-box"
        src={downloadBox}
        alt="download icon"
      />
      <div className="pdf-document" ref={documentRef}>
        <Document
          file={pdfDetails.media}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div>Loading...</div>}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              width={800}
            />
          ))}
        </Document>
      </div>
      <div className="background-shadow" />
    </>
  );
};

export default ShowFullPdf;
