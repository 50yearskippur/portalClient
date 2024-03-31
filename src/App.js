import "./App.css";
import Tabs from "./components/Tabs/Tabs";
function App() {
  return (
    <div>
      <Tabs tabsArray={["במיוחד בשבילך", "כל התוצרים", "תוצרים שאהבתי"]} />
    </div>
  );
}

export default App;
