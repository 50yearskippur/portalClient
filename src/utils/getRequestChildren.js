import RequerstInfo from "../components/Admin/Requests/RequerstInfo";
import SubsubjectRequest from "../components/Admin/Requests/SubsubjectRequest";
import RequestNewAdminInfo from "../components/Admin/Requests/RequestNewAdminInfo";
import RequestWaitingForApproval from "../components/Admin/Requests/RequestWaitingForApproval";
const getRequestChildren = (item, header) => {
  switch (true) {
    case header === "תתי נושאים חדשים":
      return SubsubjectRequest(item);
    case header === "אדמינים חדשים":
      return RequestNewAdminInfo(item);
    case header === "תוצרים שמחכים לאישור":
      return RequestWaitingForApproval(item);
    case header === "תגובות לאישור בקליק":
      return RequerstInfo(item);

    default:
      return RequerstInfo(item);
  }
};

export default getRequestChildren;
