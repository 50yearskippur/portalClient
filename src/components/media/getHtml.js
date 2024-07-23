import Pdf from "./Pdf";
import Video from "./Video";
const getHtml = (src, fileType, style) => {
  const fileTypeArray = fileType.split("/");
  switch (true) {
    case fileTypeArray.includes("video"):
      return <Video src={src} className="file" style={style} />;
    case fileTypeArray.includes("pdf"):
      return <Pdf file={src} style={style} />;
    default:
      return <img src={src} className="file" style={style} alt="file" />;
  }
};

export default getHtml;
