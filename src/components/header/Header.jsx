import React from "react";
import { useNavigate } from "react-router-dom";
import { airbnbLogo } from "../../constants/app_asset";
import { appPath } from "../../constants/app_path";
import {
  labelWebName,
} from "../../constants/constants";
import SearchRoom from "../search_room/SearchRoom";
import UserActionMenu from "../UserActionMenu";

export default function Header() {
  const navigate = useNavigate();

  const renderLogo = () => {
    return (
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          navigate(appPath.home);
        }}
      >
        <img src={airbnbLogo} className="h-[30px]" />
        <div className="ml-3 text-pink-500 text-xl font-bold">
          {labelWebName}
        </div>
      </div>
    );
  };

  return (
    <div className="container flex pt-5 justify-between">
      {renderLogo()}
      <SearchRoom />
      <UserActionMenu />
    </div>
  );
}
