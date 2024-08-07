const getFilesFormats = (fileType) => {
  switch (true) {
    case fileType === "סיכום":
      return ["DOC", "DOCX", "TEXT"];
    case fileType === "מצגת":
      return ["PPT", "PPTX"];
    case fileType === "סרטון":
      return ["MP4", "WEBM"];
    case fileType === "לומדה":
      return ["HTML"];
    case fileType === "משחק":
      return ["EXE", "ZIP"];
    default:
      return;
  }
};
export default getFilesFormats;
