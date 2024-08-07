import { format } from "date-fns";
const convertDateToString = (date) => {
  if (date) {
    const newDate = String(format(new Date(date), "dd.MM.yyyy"));
    // return newDate;
    return `${newDate} | ${new Date(date).toLocaleTimeString("en-GB")}`;
  } else {
    return "";
  }
};

export default convertDateToString;
