import React from "react";
import profileImg from "../profile.jpg";
import profileImg2 from "../profile_2.jpg";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }
  render() {
    const { collapse } = this.state;
    return (
      <React.Fragment>
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <span class="d-block d-lg-none">Sarang Patel</span>
            <span class="d-none d-lg-block">
              <img
                class="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={profileImg2}
                alt="..."
              />
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => this.setState({ collapse: !collapse })}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={collapse ? "navbar-collapse" : "collapse navbar-collapse"}
            id="navbarResponsive"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#experience">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#education">
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#skills">
                  Skills
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#interests">
                  Interests
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#awards">
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Header;
