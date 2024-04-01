import PageTemplate from "../components/PageTemplate/PageTemplate";
import PdfPreview from "../components/ItemsComponents/PdfPreview";

const Form = () => {
  return (
    <PageTemplate
      ItemComponent={PdfPreview}
      gridStyle={{
        gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr)`,
        gap: "48px",
      }}
    />
  );
};

export default Form;
