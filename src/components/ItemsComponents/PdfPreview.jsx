import "./PdfPreview.css";
import FileController from "../Media/FileController";
import ShowFullPdf from "../ShowFullPdf/ShowFullPdf";
import { useContext } from "react";
import MediaPopup from "../Popup/General/MediaPopup";
import { PopupContext } from "../../store/popup-context";

const PdfPreview = ({ item }) => {
  const { showPopup } = useContext(PopupContext);
  return (
    <>
      <div className="pdf-preview-container">
        <div className="pdf-preview-subject">{item.subSubject.title}</div>
        <FileController
          item={item}
          onClick={() =>
            showPopup(
              <MediaPopup
                item={item}
                children={<ShowFullPdf pdfDetails={item} />}
              />
            )
          }
        />
        <div className="pdf-preview-info">
          <div className="pdf-preview-title">{item.title}</div>
        </div>
      </div>
    </>
  );
};

export default PdfPreview;
