import EduResPreview from '../components/Popup/EduPreview/EduResPreview';
import FormPreview from '../components/Popup/EduPreview/FormPreview';
import MediaPreview from '../components/Popup/EduPreview/MediaPreview';

const getAdminPopUp = (fileType) => {
  switch (true) {
    case fileType === 'מצגת' || fileType === 'לומדה' || fileType === 'משחק':
      return EduResPreview;
    case fileType === 'טופס':
      return FormPreview;
    case fileType === 'תמונות סטוק ואלבומים':
      return MediaPreview;
    default:
      return EduResPreview;
  }
};

export default getAdminPopUp;
