import MediaFilesPreview from '../components/Popup/EduPreview/MediaFilesPreview';
import Files from '../components/Popup/EduPreview/Files';
import GenericFileComponent from '../components/Popup/EduPreview/GenericFileComponent';

const getCorrectFileTemplate = (edu, eduType) => {
  switch (true) {
    case eduType === 'תמונה':
      return <MediaFilesPreview edu={edu} />;
    case eduType === 'אלבום':
      return (
        <GenericFileComponent
          fileTitle={`${edu.files.length} תמונות`}
          edu={edu}
        />
      );
    case eduType === 'סיכום':
      return <GenericFileComponent fileTitle={edu.title} edu={edu} />;
    default:
      return <Files edu={edu} />;
  }
};

export default getCorrectFileTemplate;