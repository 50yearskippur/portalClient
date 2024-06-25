import "./PdfPreview.css";
import FileController from "../Media/FileController";
import DownloadIcon from "../../assets/media/Icons/downloadBoxIcon.svg";
import ShowFullPdf from "../ShowFullPdf/ShowFullPdf";
import { useState, useContext } from "react";
import downloadPdf from "../../utils/downloadPdf ";
import MediaPopup from "../Popup/MediaPopup";
import { PopupContext } from "../../store/popup-context";

const PdfPreview = ({ item }) => {
  const { showPopup } = useContext(PopupContext);
  const [showFullPdf, setShowFullPdf] = useState(false);
  return (
    <div>
      {/* {showFullPdf && ( */}
      {/* <ShowFullPdf
        downloadPdf={downloadPdf}
        setShowFullPdf={setShowFullPdf}
        pdfDetails={item}
      />
      )} */}
      <div className="pdf-preview-container">
        <div className="pdf-preview-subject">{item.subSubject.title}</div>
        <FileController
          item={item}
          onClick={() => showPopup(<MediaPopup item={item} />)}
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
