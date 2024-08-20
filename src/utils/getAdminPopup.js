import EduResPreview from '../components/Popup/EduPreview/EduResPreview';
import DesignPreview from '../components/Popup/EduPreview/DesignPreview';
import FormPreview from '../components/Popup/EduPreview/FormPreview';
import MediaPreview from '../components/Popup/EduPreview/MediaPreview';
import AddTagPopup from '../components/Popup/AddTag/AddTagPopup';

const getAdminPopUp = (selectedTab) => {
  switch (true) {
    case selectedTab.includes('תוצרים'):
      return EduResPreview;
    case selectedTab.includes('עיצובים'):
      return DesignPreview;
    case selectedTab.includes('טפסים'):
      return FormPreview;
    case selectedTab.includes('תמונות סטוק ואלבומים'):
      return MediaPreview;
    case selectedTab.includes('תתי נושאים'):
      return AddTagPopup;
    default:
      return EduResPreview;
  }
};

export default getAdminPopUp;
