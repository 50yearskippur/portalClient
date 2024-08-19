const download = (item) => {
  const link = document.createElement('a');
  link.href = item.media;
  link.download = `${item.title}.${item.mediaType === 'image' ? 'png' : 'pdf'}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default download;
