import Pdf from "./Pdf"

const getHtml = (src, fileType, style) => {
  const fileTypeArray = fileType.split("/");
  switch (true) {
    case fileTypeArray.includes("image"):
      return <img src={src} className="file" style={style} alt="file"></img>;
    case fileTypeArray.includes("video"):
      return <video src={src} className="file" style={style}></video>;
    case fileTypeArray.includes("pdf"):
      return <Pdf file={src} style={style} />;
    default:
      return <img src={src} className="file" style={style} alt="file"></img>;
  }
};

export default getHtml;
