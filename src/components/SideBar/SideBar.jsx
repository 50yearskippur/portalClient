import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

const SideBar = ({
  numItems,
  ItemComponent,
  data,
  style,
  startFrom,
  isWithShadow = false,
  propsToItemComponent = {},
  onItemClick = () => {},
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="image-list"
      style={{ ...style, overflowY: isWithShadow ? 'unset' : 'hidden' }}
    >
      {data.slice(startFrom, numItems + startFrom).map((item, index) => (
        <div
          className="image-item"
          style={{ overflow: isWithShadow ? 'unset' : 'auto' }}
          key={index}
          onClick={() => {
            onItemClick();
            navigate('/subSubject', { state: { item } });
          }}
        >
          <ItemComponent
            item={item}
            props={propsToItemComponent}
            style={{ position: 'relative', objectFit: 'cover', height: '100%' }}
          />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
