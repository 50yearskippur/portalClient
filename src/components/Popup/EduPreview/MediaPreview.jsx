import DeleteEduText from './DeleteEduText';
import handlePropagation from '../../../utils/handlePropagation';
import EduResSection from './EduResSection';
import getCorrectFileTemplate from '../../../utils/getCorrectFileTemplate';
import GenericEduTop from './GenericEduTop';
import getAlbumChildren from '../../../utils/getAlbumChildren';
import formIcon from '../../../assets/media/Upload/form.svg';

const MediaPreview = ({ edu }) => {
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <GenericEduTop edu={edu} icon={formIcon} />
      <EduResSection
        title="קבצים"
        content={getCorrectFileTemplate(edu, edu.type)}
      />
      {getAlbumChildren(edu).map((child) => child)}
      <DeleteEduText />
    </div>
  );
};

export default MediaPreview;
