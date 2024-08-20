import { useContext } from 'react';
import React from 'react';
import { PopupContext } from '../../../store/popup-context';
import iconType from '../RowTypes/IconType';

const TemplateRow = React.memo(
  ({ children, item, PopUp, onClick, icon, iconStyle }) => {
    const { showPopup } = useContext(PopupContext);
    return (
      <div
        style={{ backgroundColor: iconType(item)[1]?.color }}
        className="generic-row-container"
        onClick={onClick ? onClick : () => showPopup(<PopUp edu={item} />)}
      >
        {children.map((child, index) => (
          <div key={`child ${index}`} className="generic-row-child">
            {child}
          </div>
        ))}
        <img
          src={icon}
          alt="arrow"
          className="generic-row-arrow"
          style={iconStyle}
        />
      </div>
    );
  }
);
export default TemplateRow;
