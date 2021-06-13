import React from 'react';

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
                                <h3 class="mb-0">Government Engineering College sect-28, Gandhinagar</h3>
                                <div class="subheading mb-3">Bachelor of Engineering</div>
                                <div>Computer Engineering</div>
                                <p>CGPA: 8.60</p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">August 2016 - Aug 2020</span></div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">J.L High School</h3>
                                <div class="subheading mb-3">H.S.C in Science(Gujarat Board)</div>
                                <p>Result: 86% </p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">August 2014 - May 2016</span></div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">J.L High School</h3>
                                <div class="subheading mb-3">S.S.C (Gujarat Board)</div>
                                <p>Result: 83% </p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">August 2013 - Mar 2014</span></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Education;
