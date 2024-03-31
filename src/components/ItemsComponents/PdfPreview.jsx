import "./PdfPreview.css";
import FileController from "../media/FileController";
import DownloadIcon from "../../assets/media/Icons/downloadIcon.png";
import ShowFullPdf from "../ShowFullPdf/ShowFullPdf";
import { useState } from "react";

const downloadPdf = (item) => {
  const link = document.createElement("a");
  link.href = item.media;
  link.download = `${item.title}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const PdfPreview = ({ item }) => {
  const [showFullPdf, setShowFullPdf] = useState(false);
  return (
    <div>
      {showFullPdf && <ShowFullPdf pdfDetails={item} />}
      <div className="pdf-preview-container">
        <FileController item={item} onClick={() => setShowFullPdf(true)} />
        <div className="pdf-preview-info">
          <div>
            <div className="pdf-preview-title">{item.title}</div>
            <div className="pdf-preview-subject">{item.subSubject.title}</div>
          </div>
          <img
            onClick={() => downloadPdf(item)}
            className="pdf-preview-download-icon"
            alt="download-icon"
            src={DownloadIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default PdfPreview;
