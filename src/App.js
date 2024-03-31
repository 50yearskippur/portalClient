import "./App.css";
import {PopupProvider} from "./store/popup-context";
import {UserProvider} from "./store/user-context";

function App() {
  return (
    <UserProvider>
      <PopupProvider></PopupProvider>
    </UserProvider>
  );
}

export default App;
