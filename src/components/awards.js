import React from "react";

class Awards extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Alibaba Cloud Certified
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                InsideSherpa Accenture Discovery Programe Certified
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                JP MORGAN CHASE & CO. Software Engineering Virtual Experience
              </li>

              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Deloitte. Technology Consulting Virtual Experience
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                4<sup>th</sup>
                GTU Regional Tech-Fest Event Code Reducer Event
              </li>
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Awards;
