import eduTypesTitles from "../constants/eduTypes";

const eduTypeByText = (text) => {
  return eduTypesTitles.find((eduType) => eduType.text === text).img;
};

export default eduTypeByText;
