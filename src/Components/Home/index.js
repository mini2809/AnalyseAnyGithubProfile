import TopNavBar from "../TopNavBar";
import MainContent from "../MainContent";
import SideNavBar from "../SideNavBar";
import { Component } from "react";

class Home extends Component  {
  render(){
    return (
      <div className="App">
        <TopNavBar />
        <div className="sections">
          <SideNavBar />
          <MainContent />
        </div>
      </div>
    );
  }
 
}

export default Home;