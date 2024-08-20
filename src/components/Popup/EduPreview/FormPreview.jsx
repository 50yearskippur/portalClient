import DeleteEduText from './DeleteEduText';
import handlePropagation from '../../../utils/handlePropagation';
import EduResSection from './EduResSection';
import GenericEduTop from './GenericEduTop';
import getCorrectFileTemplate from '../../../utils/getCorrectFileTemplate';
import Setting from './SettingsList';
import formIcon from '../../../assets/media/Upload/form.svg';

const FormPreview = ({ edu }) => {
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <GenericEduTop edu={edu} iconSrc={formIcon} />
      <EduResSection
        title="קבצים"
        content={getCorrectFileTemplate(edu, edu.type)}
      />
      <EduResSection
        title="הגדרות"
        content={
          <Setting
            settingsArray={edu.settings}
            disabled={true}
            pageType="טפסים"
          />
        }
      />
      <DeleteEduText />
    </div>
  );
};

export default FormPreview;
