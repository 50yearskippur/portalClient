import './DownloadBox.css';
import download from '../../utils/download';
import downloadBox from '../../assets/media/Icons/downloadBoxIcon.svg';

const DownloadBox = ({ item, style }) => (
  <img
    onClick={() => download(item)}
    style={style}
    className="download-icon-box"
    src={downloadBox}
    alt="download icon"
  />
);

export default DownloadBox;
