import ImageGrid from "../components/Popup/EduPreview/FileGrid";
import Files from "../components/Popup/EduPreview/Files";
import GenericFileComponent from "../components/Popup/EduPreview/GenericFileComponent";
const getCorrectFileTemplate = (edu, eduType) => {
  console.log(eduType);
  if (eduType === "תמונה") return <ImageGrid edu={edu} />;
  if (eduType === "אלבום")
    return (
      <GenericFileComponent
        fileTitle={`${edu.files.length} תמונות`}
        edu={edu}
      />
    );
  if (eduType === "סיכום")
    return <GenericFileComponent fileTitle={edu.title} edu={edu} />;

  return <Files edu={edu} />;
};

export default getCorrectFileTemplate;
