import React from "react";
import Lottie from "react-lottie";
import animationData from "./36365-the-6-loading-circles-model-22g-iphone-12-colors.json";
import "./Loading.scss";
export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
