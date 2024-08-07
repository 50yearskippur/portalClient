import EduPreviewTop from "../components/Popup/EduPreview/EduPreviewTop";
import PhotoPreviewTop from "../components/Popup/EduPreview/PhotoPreviewTop";
const getEduPreviewTopChildren = (eduType, edu) => {
  switch (true) {
    case eduType.includes("סיכום"):
      return PhotoPreviewTop(edu);
    case eduType.includes("אלבום"):
      return PhotoPreviewTop(edu);

    default:
      return EduPreviewTop;
  }
};

export default getEduPreviewTopChildren;
