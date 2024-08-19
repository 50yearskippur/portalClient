import MediaFilesPreview from '../components/Popup/EduPreview/MediaFilesPreview';
import Files from '../components/Popup/EduPreview/Files';
import GenericFilePreview from '../components/Popup/EduPreview/GenericFilePreview';

const getCorrectFileTemplate = (edu, eduType) => {
  switch (true) {
    case eduType === 'תמונה':
      return <MediaFilesPreview edu={edu} />;
    case eduType === 'אלבום':
      return (
        <GenericFilePreview
          fileTitle={`${edu.files.length} תמונות`}
          edu={edu}
        />
      );
    case eduType === 'סיכום':
      return <GenericFilePreview fileTitle={edu.title} edu={edu} />;
    default:
      return <Files edu={edu} />;
  }
};

export default getCorrectFileTemplate;
