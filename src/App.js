import "./App.css";
import {PopupProvider} from "./store/popup-context";
import {UserProvider} from "./store/user-context";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import paths from "./constants/paths";
import {createElement} from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <PopupProvider>
          <NavBar />
          <Routes>
            {paths.map((path) => (
              <Route
                key={path.text}
                path={path.path}
                element={createElement(path.component)}
              />
            ))}
          </Routes>
        </PopupProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
