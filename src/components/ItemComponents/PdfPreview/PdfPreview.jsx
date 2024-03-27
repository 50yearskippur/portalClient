import "./PdfPreview.css";
import FileController from "../../media/FileController";
import DownloadIcon from "../../../assets/media/Icons/downloadIcon.png";

const PdfPreview = ({ pdfDetails }) => {
  return (
    <div className="pdf-preview-container">
      <FileController item={pdfDetails} />
      <div className="pdf-preview-info">
        <div>
          <div className="pdf-preview-title">{pdfDetails.title}</div>
          <div className="pdf-preview-subject">{pdfDetails.subSubject}</div>
        </div>
        <img
          className="pdf-preview-download-icon"
          alt="download-icon"
          src={DownloadIcon}
        />
      </div>
    </div>
  );
};

export default PdfPreview;
