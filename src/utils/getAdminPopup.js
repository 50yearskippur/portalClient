import EduResPreview from '../components/Popup/EduPreview/EduResPreview';
import FormPreview from '../components/Popup/EduPreview/FormPreview';
import MediaPreview from '../components/Popup/EduPreview/MediaPreview';

const getAdminPopUp = (selectedTab) => {
  switch (true) {
    case selectedTab.includes('תוצרים'):
      return EduResPreview;
    case selectedTab.includes('טפסים'):
      return FormPreview;
    case selectedTab.includes('תמונות סטוק ואלבומים'):
      return MediaPreview;
    default:
      return EduResPreview;
  }
};

export default getAdminPopUp;
