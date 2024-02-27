import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { appPath } from "../../constants/app_path";
import { labelLogIn, labelSignUp } from "../../constants/constants";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={() => {
          navigate(appPath.register);
        }}
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
}
