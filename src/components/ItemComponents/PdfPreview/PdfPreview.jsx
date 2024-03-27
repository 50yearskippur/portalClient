import "./PdfPreview.css";
import FileController from "../../media/FileController";

const PdfPreview = ({ pdfDetails }) => {
  return (
    <div>
      <FileController item={pdfDetails} />
    </div>
  );
};

export default PdfPreview;
