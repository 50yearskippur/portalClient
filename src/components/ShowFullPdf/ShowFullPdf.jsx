import React, {useState, useEffect, useRef} from "react";
import {Document, Page} from "react-pdf";
import "./ShowFullPdf.css";
import DownloadBox from "../Download/DownloadBox";

const ShowFullPdf = ({pdfDetails, setShowFullPdf}) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const documentRef = useRef();

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const currentDocument = documentRef.current;

    const handleScroll = () => {
      if (numPages && currentDocument) {
        const {scrollTop, scrollHeight, clientHeight} = currentDocument;
        const scrolled = scrollTop / (scrollHeight - clientHeight);
        setCurrentPage(Math.max(1, Math.ceil(scrolled * numPages)));
      }
    };

    if (currentDocument) {
      currentDocument.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentDocument) {
        currentDocument.removeEventListener("scroll", handleScroll);
      }
    };
  }, [numPages]);

  return (
    <>
      <div className="pdf-information">
        <p className="pdf-title">{pdfDetails.title}</p>
        <p className="pdf-page-number">
          דף {currentPage} מתוך {numPages}
        </p>
      </div>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <DownloadBox item={pdfDetails} />
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
      </div>

      <div
        className="background-shadow"
        onClick={() => setShowFullPdf(false)}
      />
    </>
  );
};

export default ShowFullPdf;
