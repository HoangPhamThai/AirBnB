import { appPath } from "../constants/app_path";
import { userInfoKey, userRole } from "../constants/constants";

export default function AuthGate({ children }) {
  let userInfo = localStorage.getItem(userInfoKey);
  let user = JSON.parse(userInfo);
  console.log(user);
  if (!user || user.user.role !== userRole.admin) {
    window.location.href = appPath.login;
  }
  return children;
}
