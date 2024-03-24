import {Document, Page} from "react-pdf";

const Pdf = ({file}) => {
  return (
    <Document file={file} loading={<div>Loading...</div>}>
      <Page pageNumber={1} renderTextLayer={false} width={500} />
    </Document>
  );
};

export default Pdf;
