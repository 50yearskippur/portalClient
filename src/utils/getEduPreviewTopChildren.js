import EduResPreview from "../components/Popup/EduPreview/EduResPreview";
import DesignPreview from "../components/Popup/EduPreview/DesignPreview";
import FormPreview from "../components/Popup/EduPreview/FormPreview";
import MediaPreview from "../components/Popup/EduPreview/MediaPreview";
import EduPreviewTop from "../components/Popup/EduPreview/EduPreviewTop";
import PhotoPreviewTop from "../components/Popup/EduPreview/PhotoPreviewTop";
const getEduPreviewTopChildren = (eduType, edu) => {
  console.log(edu);
  switch (true) {
    case eduType.includes("תמונה"):
      return PhotoPreviewTop(edu);
    case eduType.includes("סיכום"):
      return PhotoPreviewTop(edu);

    default:
      return EduPreviewTop;
  }
};

export default getEduPreviewTopChildren;
