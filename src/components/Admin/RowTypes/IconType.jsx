import blueV from "../../../assets/media/Icons/blueV.svg";
import experationWarning from "../../../assets/media/Icons/experationWarning.svg";
import experationRemainer from "../../../assets/media/Icons/ExperationRemainder.svg";

const IconType = (item) => {
  const date = new Date();
  const experationin4days = date;
  experationin4days.setDate(date.getDate() + 4);
  console.log(item.experationDate);
  console.log(date);
  if (item.uploadByArtech) return blueV;
  if (item.experationDate > date) return experationWarning;
  if (experationin4days >= item.experationDate) return experationRemainer;
  return "";
};
export default IconType;
