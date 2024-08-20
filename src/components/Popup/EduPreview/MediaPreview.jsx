import DeleteEduText from './DeleteEduText';
import handlePropagation from '../../../utils/handlePropagation';
import EduResSection from './EduResSection';
import GenericEduTop from './GenericEduTop';
import pictureIcon from '../../../assets/media/Upload/picture.svg';
import ImageGallery from './ImageGallery';

const MediaPreview = ({ edu }) => {
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <GenericEduTop
        edu={edu}
        iconSrc={pictureIcon}
        pageType="תמונת סטוק / אלבום"
      />
      <EduResSection
        title="קבצים"
        content={<ImageGallery images={edu.files} />}
      />
      <DeleteEduText />
    </div>
  );
};

export default MediaPreview;
