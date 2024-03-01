import { Avatar, Dropdown } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { appPath } from "../constants/app_path";
import {
  fieldKey,
  labelLogIn,
  labelLogOut,
  labelManagement,
  labelSignUp,
  userInfoKey,
  userRole,
} from "../constants/constants";
import { setUser } from "../redux/userSlice";
import { UserOutlined } from "@ant-design/icons";

export default function UserActionMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userSlice.user);

  const renderOptions = () => {
    if (userInfo) {
      let defaultAction = [
        {
          key: fieldKey.logout,
          label: (
            <div
              onClick={() => {
                localStorage.setItem(userInfoKey, JSON.stringify(""));
                dispatch(setUser(undefined));
                navigate(appPath.home);
              }}
            >
              {labelLogOut}
            </div>
          ),
        },
      ];
      if (userInfo.user.role === userRole.admin) {
        defaultAction = [
          {
            key: fieldKey.management,
            label: (
              <div
                onClick={() => {
                  navigate(appPath.generalManagement);
                }}
              >
                {labelManagement}
              </div>
            ),
          },
          ...defaultAction,
        ];
      }
      return defaultAction;
    }
    return [
      {
        key: fieldKey.login,
        label: (
          <div
            onClick={() => {
              navigate(appPath.login);
            }}
          >
            {labelLogIn}
          </div>
        ),
      },
      {
        key: fieldKey.signup,
        label: (
          <div
            onClick={() => {
              navigate(appPath.register);
            }}
          >
            {labelSignUp}
          </div>
        ),
      },
    ];
  };

  const renderAvatar = () => {
    if (userInfo) {
      return (
        <Avatar
          size={30}
          icon={<UserOutlined />}
          onClick={() => {
            if (userInfo.user.role === userRole.user) {
              navigate(appPath.customer);
            }
          }}
        />
      );
    }
  };

  return (
    <div className="text-right items-center">
      <Dropdown
        menu={{ items: renderOptions() }}
        arrow={false}
        placement="bottomRight"
        className="mr-3"
      >
        <i className="fa-solid fa-bars"></i>
      </Dropdown>
      {renderAvatar()}
    </div>
  );
}
