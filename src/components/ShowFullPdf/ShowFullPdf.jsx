import React, { useState, useEffect, useRef } from "react";
import "./ShowFullPdf.css";

const ShowFullPdf = () => {
  const [numPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const documentRef = useRef();

  useEffect(() => {
    const currentDocument = documentRef.current;

    const handleScroll = () => {
      if (numPages && currentDocument) {
        const { scrollTop, scrollHeight, clientHeight } = currentDocument;
        const scrolled = scrollTop / (scrollHeight - clientHeight);
        setCurrentPage(Math.max(1, Math.ceil(scrolled * numPages)));
      }
    };

    if (currentDocument) {
      currentDocument.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentDocument) {
        currentDocument.removeEventListener('scroll', handleScroll);
      }
    };
  }, [numPages]);

  return (
    <>
      <p className="pdf-page-number">
        דף {currentPage} מתוך {numPages}
      </p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className="pdf-document" ref={documentRef}>
        </div>
      </div>
    </>
  );
};

export default ShowFullPdf;
