const getFilesFormats = (fileType) => {
  switch (true) {
    case fileType === "סיכום":
      return ["doc", "docx", "text"];
    case fileType === "מצגת":
      return ["ppt", "pptx"];
    case fileType === "סרטון":
      return ["mp4", "webm"];
    case fileType === "לומדה":
      return ["html"];
    case fileType === "משחק":
      return ["exe", "zip"];
    default:
      return;
  }
};
export default getFilesFormats;
