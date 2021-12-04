import React from "react";
import reactDom from "react-dom";
import "./index.css";

const TopNavBar = () => {
  return (
    <div className="container">
      <div className="left-section">
       USER PORTAL
      </div>
      <div className="right-section">
        <div>
          <div className="icons-container">
            <div className="icon-div">
            <i className="fi fi-sr-bell"></i>
            </div>
            <div className="icon-div">
            <i className="fi fi-sr-user"></i>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopNavBar;
