import "./PdfPreview.css";
import FileController from "../../Media/FileController";
import DownloadIcon from "../../../assets/media/icons/downloadIcon.png";

const downloadPdf = (pdfDetails) => {
  const link = document.createElement("a");
  link.href = pdfDetails.media;
  link.download = `${pdfDetails.title}.pdf`; // or any other filename you want
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const PdfPreview = ({pdfDetails}) => {
  return (
    <div className="pdf-preview-container">
      <FileController item={pdfDetails} />
      <div className="pdf-preview-info">
        <div>
          <div className="pdf-preview-title">{pdfDetails.title}</div>
          <div className="pdf-preview-subject">{pdfDetails.subSubject}</div>
        </div>
        <img
          onClick={() => downloadPdf(pdfDetails)}
          className="pdf-preview-download-icon"
          alt="download-icon"
          src={DownloadIcon}
        />
      </div>
    </div>
  );
};

export default PdfPreview;
