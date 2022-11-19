import React from "react";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">University At Albany, SUNY</h3>
                <div class="subheading mb-3">Masters of Science</div>
                <div>Computer Science</div>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2022 - December 2023</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">
                  Government Engineering College sect-28, Gandhinagar
                </h3>
                <div class="subheading mb-3">Bachelor of Engineering</div>
                <div>Computer Engineering</div>
                <p>CGPA: 8.60</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2022 - May 2020</span>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Education;
