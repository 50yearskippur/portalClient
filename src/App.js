import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { PopupProvider } from "./store/popup-context";
import { UserProvider } from "./store/user-context";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import paths from "./constants/paths.js";
import NavBar from "./components/NavBar/NavBar";
import Popup from "./components/Popup/Popup";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <PopupProvider>
          <div className="app">
            <NavBar />
            <Popup />
            <div className="content">
              <Routes>
                {paths.map((path) => (
                  <Route
                    key={path.text}
                    path={path.path}
                    element={<path.component />}
                  />
                ))}
              </Routes>
            </div>
          </div>
          <ToastContainer
            position={"bottom-center"}
            hideProgressBar={true}
            limit={1}
          />
        </PopupProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
