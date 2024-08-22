import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import handlePropagation from '../../utils/handlePropagation';

const Star = () => {
  const [isPressed, setIsPressed] = useState(null);
  return (
    <FaStar
      className="star"
      size={20}
      color={isPressed ? '#111827' : '#dadbe8'}
      onClick={(e) => {
        setIsPressed((prev) => !prev);
        handlePropagation(e);
      }}
    />
  );
};

export default Star;
