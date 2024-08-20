import DeleteEduText from './DeleteEduText';
import handlePropagation from '../../../utils/handlePropagation';
import EduResSection from './EduResSection';
import GenericEduTop from './GenericEduTop';
import Setting from './SettingsList';
import formIcon from '../../../assets/media/Upload/form.svg';
import GenericFilePreview from './GenericFilePreview';

const FormPreview = ({ edu }) => {
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <GenericEduTop edu={edu} iconSrc={formIcon} pageType="טפסים" />
      <EduResSection
        title="קבצים"
        content={<GenericFilePreview fileTitle={edu.title} edu={edu} />}
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
