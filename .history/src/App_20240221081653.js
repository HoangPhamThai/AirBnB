import logo from "./logo.svg";
import "./App.css";
import Spinner from "./components/spinner/Spinner";
import { BrowserRouter, Route } from "react-router-dom";
import { appPath } from "./constants/app_path";
import Layout from "./template/Layout";
import AuthGate from "./template/AuthGate";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path={appPath.home} element={<Layout />}></Route>

          <Route path={appPath.admin} element={<AuthGate></AuthGate>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
