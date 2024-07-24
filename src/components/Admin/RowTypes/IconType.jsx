import blueV from "../../../assets/media/Icons/blueV.svg";
import experationWarning from "../../../assets/media/Icons/experationWarning.svg";
import experationRemainer from "../../../assets/media/Icons/ExperationRemainder.svg";

const iconType = (item) => {
  const arr = [];
  const date = new Date();
  let experationin4days = new Date();
  experationin4days.setDate(experationin4days.getDate() + 4);
  if (item.uploadByArtech)
    arr.push({ icon: blueV, toolTipContent: "דרוש תיקוף" });
  if (item.experationDate < date) {
    arr.push({
      icon: experationWarning,
      toolTipContent: "דרוש תיקוף",
      tooltipId: "tooltip-warning",
      color: "#F8E9F0",
    });
    return arr;
  }

  if (experationin4days >= item.experationDate) {
    arr.push({
      icon: experationRemainer,
      toolTipContent: "תזכורת- לתקף תוך 4 ימים",
      tooltipId: "tooltip-remainder",
      color: "#FCF2E3",
    });

    return arr;
  }
  return arr;
};
export default iconType;
