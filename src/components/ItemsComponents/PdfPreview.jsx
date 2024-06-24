import "./PdfPreview.css";
import FileController from "../Media/FileController";
import DownloadIcon from "../../assets/media/Icons/downloadBoxIcon.svg";
import ShowFullPdf from "../ShowFullPdf/ShowFullPdf";
import { useState } from "react";
import downloadPdf from "../../utils/downloadPdf ";

const PdfPreview = ({ item }) => {
  const [showFullPdf, setShowFullPdf] = useState(false);
  return (
    <div>
      {/* {showFullPdf && (
        <ShowFullPdf
          downloadPdf={downloadPdf}
          setShowFullPdf={setShowFullPdf}
          pdfDetails={item}
        />
      )} */}
      <div className="pdf-preview-container">
        <div className="pdf-preview-subject">{item.subSubject.title}</div>
        <FileController
          item={item}
          // onClick={() => setShowFullPdf(true)}
        />
        <div className="pdf-preview-info">
          <div>
            <div className="pdf-preview-title">{item.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfPreview;
