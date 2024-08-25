export const download = (item) => {
  const link = document.createElement("a");
  link.href = item.file;
  link.download = `${item.fileName}.${item.MimeType === "image" ? 'png' : item.MimeType}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default download;
