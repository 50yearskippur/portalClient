import PageTemplate from "../components/PageTemplate/PageTemplate";
import PdfPreview from "../components/ItemsComponents/PdfPreview";
import Subjects from "../components/Subjects/Subjects";

const FormPage = () => {
  return (
    <div style={{display: "flex", width: "70vw", marginRight: "21vw"}}>
      <Subjects />
      <PageTemplate
        ItemComponent={PdfPreview}
        gridStyle={{
          gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr)`,
          gap: "48px",
        }}
      />
    </div>
  );
};

export default FormPage;
