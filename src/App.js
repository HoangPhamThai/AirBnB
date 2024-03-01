import "./App.css";
import Spinner from "./components/spinner/Spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appPath } from "./constants/app_path";
import Layout from "./template/Layout";

import HomePage from "./pages/home/HomePage";
import Customer from "./pages/customer/Customer";
import GeneralManagement from "./pages/general_management/GeneralManagement";
import LoginForm from "./pages/auth/LoginForm";
import RegisterForm from "./pages/auth/RegisterForm";
import RoomDetail from "./pages/room/RoomDetail";
import AuthGate from "./template/AuthGate";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path={appPath.home} element={<Layout />}>
            <Route path={appPath.home} element={<HomePage />} />
            <Route path={appPath.customer} element={<Customer />} />
            <Route path={appPath.room + "/:roomId"} element={<RoomDetail />} />
            <Route
              path={appPath.generalManagement}
              element={
                <AuthGate>
                  <GeneralManagement />
                </AuthGate>
              }
            />
          </Route>

          <Route path={appPath.login} element={<LoginForm />} />
          <Route path={appPath.register} element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
