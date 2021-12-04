import React from "react";
import reactDom from "react-dom";
import "./index.css";

const SideNavBar = () => {
  return (
    <div className="side-main-container">
      
      <table id="side-nav">
        <tr>
          <th><i class="fi fi-sr-settings"></i></th>
          <th>Settings</th>
        </tr>
        <tr>
          <th className="icons"><i class="fi fi-sr-user"></i></th>
          <th>My Profile</th>
        </tr>
        <tr>
          <th><i class="fi fi-sr-home"></i></th>
          <th>Home</th>
        </tr>
      
      </table>
    </div>
  );
};
export default SideNavBar;
