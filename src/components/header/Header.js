import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header pt-3 container">
        <div className="d-flex justify-content-between">
          <NavLink className="text-decoration-none" to="/">
            <div className="logo d-flex justify-content-between">
              <div className="logoIcon pe-1">
                <i class="fab fa-airbnb display-5"></i>
              </div>
              <span className="logoName d-md-inline d-none fw-bold fs-3">
                airbnb
              </span>
            </div>
          </NavLink>

          <div className="linksHeader d-flex align-items-center justify-content-center">
            <nav>
              <a className="pe-2 btn btn-link" href="/">
                Nơi ở
              </a>
              <a className="pe-2 btn btn-link" href="/">
                Trải nghiệm
              </a>
              <a className="pe-2 btn btn-link" href="/">
                Trải nghiệm trực tuyến
              </a>
            </nav>
          </div>
          <div className="logInSignUp d-flex align-items-center justify-content-center">
            <NavLink className="pe-2 btn btn-link" to="/login">
              Log in
            </NavLink>
            <NavLink className="pe-2 btn btn-link" to="/signup">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
