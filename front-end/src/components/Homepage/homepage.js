import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./homepage.css";

class homepage extends Component {
  state = {};
  render() {
    return (
      <div className="homepage-main">
        <h2 className="header">
          <div className="header-border">
            <span className="I-of-iREC">i</span>
            <span className="R-of-iREC">R</span>
            <span className="E-of-iREC">e</span>
            <span className="C-of-iREC">c</span>
          </div>
        </h2>

        <div>
          <div class="sidenav">
            <span>
              <NavLink to="/awareness">Awareness</NavLink>
            </span>
            <span>
              <NavLink to="/sales">Sales</NavLink>
            </span>
            <span>
              <NavLink to="/revenue">Revenue</NavLink>
            </span>
            <span>
              <NavLink to="/analytics">Analytics</NavLink>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default homepage;
