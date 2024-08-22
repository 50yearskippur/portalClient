import Courseware from './Courseware';
import Pdf from './Pdf';
import Video from './Video';
// import PDFViewer from "pdf-viewer-reactjs";

const getHtml = (src, fileType, style) => {
  const fileTypeArray = fileType.split('/');
  switch (true) {
    case fileTypeArray.includes('mp4'):
      return <Video src={src} className="file-style" style={style} />;
    case fileTypeArray.includes('pdf'):
      return <Pdf file={src} style={style} />;
    case fileTypeArray.includes('html'):
      return <Courseware src={src} />;
    default:
      return <img src={src} className="file-style" style={style} alt="file" />;
  }
};

export default getHtml;
