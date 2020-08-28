import React from "react";
import "./Loading.scss";

const loadingWrapperStyle = {
  position: "fixed",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default function Loading() {
  return (
    <div style={loadingWrapperStyle}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
