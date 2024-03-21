const getHtmlFile = (src, fileType, style) => {
  const fileTypeArray = fileType.split("/");
  switch (true) {
    case fileTypeArray.includes("image"):
      return <img src={src} className="file" style={style} alt="picture"></img>;
    case fileTypeArray.includes("video"):
      return <video src={src} className="file" style={style}></video>;
    case fileTypeArray.includes("pdf"):
      return <video src={src} className="file"></video>;
  }
};