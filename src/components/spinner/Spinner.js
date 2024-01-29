import React from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);
  return isLoading ? (
    <div style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <ClipLoader color="#36d7b7" size={100} />
    </div>
  ) : <></>;
}
