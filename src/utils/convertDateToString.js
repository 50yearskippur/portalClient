import { format } from "date-fns";
const convertDateToString = (date) => {
  console.log(date);
  const newDate = String(format(new Date(date), "dd.MM.yyyy"));
  return `${newDate}`;
  //   return `${newDate} | ${new Date(date).toLocaleTimeString("en-GB")}`;
};

export default convertDateToString;
