import { format } from 'date-fns';

const convertDateToString = (date) => {
  if (date) {
    const newDate = format(new Date(date), 'd.M.yyyy');
    const newTime = format(new Date(date), 'HH:mm');
    return `${newTime} | ${newDate}`;
  }
  return '';
};

export default convertDateToString;
