import Setting from "../components/Popup/EduPreview/Settings";
import EduResSection from "../components/Popup/EduPreview/EduResSection";
import Groups from "../components/Popup/EduPreview/Groups";

const getAlbumChildren = (edu) => {
  const settingsArray = ["   האלבום יופיע באלבומים מומלצים"];
  switch (true) {
    case edu.type.includes("אלבום"):
      return [
        <EduResSection
          title="הגדרות"
          content={<Setting settingsArray={settingsArray} />}
        />,
        <EduResSection
          title="קורסים או יחידות רלוונטיים"
          content={
            <Groups
              groups={[
                "לורם איפסום",
                "לורם איפסום",
                "לורם איפסום",
                "לורם איפסום",
              ]}
            />
          }
        />,
      ];

    default:
      return [];
  }
};
export default getAlbumChildren;
