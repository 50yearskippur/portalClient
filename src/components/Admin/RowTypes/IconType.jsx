import blueV from "../../../assets/media/Icons/blueV.svg";
import experationWarning from "../../../assets/media/Icons/experationWarning.svg";
import experationRemainer from "../../../assets/media/Icons/ExperationRemainder.svg";

const iconType = (item) => {
  const date = new Date();
  const experationin4days = date;
  experationin4days.setDate(date.getDate() + 4);
  if (item.uploadByArtech) return { icon: blueV, toolTipContent: "דרוש תיקוף" };
  if (item.experationDate > date) {
    return {
      icon: experationWarning,
      toolTipContent: "דרוש תיקוף",
      tooltipId: "tooltip-warning",
    };
  }
  if (experationin4days >= item.experationDate) {
    return {
      icon: experationRemainer,
      toolTipContent: "ארבעה ימים",
      tooltipId: "tooltip-remainder",
    };
  }
  return "";
};
export default iconType;
