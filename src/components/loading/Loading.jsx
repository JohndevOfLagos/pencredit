import React from "react";
import "./loading.scss";

export const Loading = () => {
  return (
    <div className="loader">
      <div className="loading-box">
      <div className="spinner-block">
      <span className="spinner"></span>
      </div>
      <div className="loading">
        <span className="p">P</span>
        <span className="l">l</span>
        <span className="e">e</span>
        <span className="a">a</span>
        <span className="s">s</span>
        <span className="e">e</span>
        <span className="wait-space">
        <span className="w">w</span>
        <span className="a">a</span>
        <span className="i">i</span>
        <span className="t">t</span>
        <span className="d1">.</span>
        <span className="d2">.</span>
        <span className="d3">.</span>
        </span>
      </div>
    </div>
    </div>
  );
};
