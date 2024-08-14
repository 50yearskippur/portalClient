import './WaitingList.css';
import getRequestChildren from '../../../utils/getRequestChildren';
const WaitingList = ({ requests, header }) => {
  return (
    <div className="requests-container">
      {requests.map((request, index) => (
        <div key={`request ${index}`}>
          {getRequestChildren(request, header).map((child) => child)}
        </div>
      ))}
    </div>
  );
};
export default WaitingList;
