import "./PdfPreview.css";
import FileController from "../Media/FileController";
import DownloadIcon from "../../assets/media/icons/downloadIcon.png";

const downloadPdf = (item) => {
  const link = document.createElement("a");
  link.href = item.media;
  link.download = `${item.title}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const PdfPreview = ({item}) => {
  return (
    <div className="pdf-preview-container">
      <FileController item={item} style={{width: "300"}} />
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
  );
};

export default PdfPreview;
