import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { airbnbLogo } from "../../constants/app_asset";
import { appPath } from "../../constants/app_path";
import {
  labelLogIn,
  labelLogOut,
  labelSignUp,
  labelWebName,
} from "../../constants/constants";
import { setUser } from "../../redux/userSlice";
import SearchRoom from "../search_room/SearchRoom";
import UserActionMenu from "../UserActionMenu";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userSlice.user);

  const renderLogo = () => {
    return (
      <div className="flex items-center cursor-pointer" onClick={() => {
        navigate(appPath.home)
      }}>
        <img src={airbnbLogo} className="h-[30px]" />
        <div className="ml-3 text-pink-500 text-xl font-bold">
          {labelWebName}
        </div>
      </div>
    );
  };

  const renderButtons = () => {
    if (userInfo) {
      return (
        <div>
          <Button
            onClick={() => {
              dispatch(setUser(undefined));
            }}
          >
            {labelLogOut}
          </Button>
        </div>
      );
    }
    return (
      <div>
        <Button
          onClick={() => {
            navigate(appPath.register);
          }}
          className="mr-3"
        >
          {labelSignUp}
        </Button>
        <Button
          onClick={() => {
            navigate(appPath.login);
          }}
        >
          {labelLogIn}
        </Button>
      </div>
    );
  };

  const renderMenuButton = () => {
    return <div className="rounded-2xl border"></div>;
  };

  return (
    <div className="container grid grid-cols-3 pt-5">
      {renderLogo()}
      <SearchRoom />
      <UserActionMenu />
      {/* <div className="text-right">{renderButtons()}</div> */}
    </div>
  );
}
