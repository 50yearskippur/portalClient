import RequerstInfo from "../components/Admin/Requests/RequerstInfo";
import RequestNewAdminInfo from "../components/Admin/Requests/RequestNewAdminInfo";
import RequestWaitingForApproval from "../components/Admin/Requests/RequestWaitingForApproval";
const getRequestChildren = (item, header) => {
  switch (true) {
    case header === "תתי נושאים חדשים":
      return RequerstInfo(item);
    case header === "אדמינים חדשים":
      return RequestNewAdminInfo(item);
    case header === "תוצרים שממתינים לאישור":
      return RequestWaitingForApproval(item);
    default:
      return RequerstInfo(item);
  }
};

export default getRequestChildren;
