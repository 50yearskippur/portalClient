import "./App.css";
import { PopupProvider } from "./store/popup-context";
import { UserProvider } from "./store/user-context";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import paths from "./constants/paths.js";
import { createElement } from "react";
import NavBar from "./components/NavBar/NavBar";
import Popup from "./components/Popup/Popup";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <PopupProvider>
          <div className="app">
            <NavBar />
            <Popup />
            <Routes>
              {paths.map((path) => (
                <Route
                  key={path.text}
                  path={path.path}
                  element={createElement(path.component)}
                />
              ))}
            </Routes>
          </div>
        </PopupProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
