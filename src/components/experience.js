import React from 'react';

class Experience extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <section class="resume-section" id="experience">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Experience</h2>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">JavaScript Full-Stack Developer</h3>
                                <div class="subheading mb-3">Peerbits</div>
                                <p>As a JavaScript Full-Stack Developer I worked in the Technologies like NodeJs, ReactJs, and Mainly a MeteorJS and also I learn too many new things in This Technologies too. During the Time I Work mainly on <a href="https://funnelcockpit.com/">FUNNELCOCKPIT</a> </p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">December 2020 - Present</span></div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">JavaScript Full-Stack Developer (Trainee)</h3>
                                <div class="subheading mb-3">Peerbits</div>
                                <p>As a Trainee JavaScript Developer My Job is to Learn and Grow my self in the Diffrent Technologies Everyday. In this Time of my Employment I worked on the project <a href="https://join.buyzooka.io">BUYZOOKA</a></p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">December 2020 - Feb 2021</span></div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">Web Development Intern</h3>
                                <div class="subheading mb-3">The SParks Foundation</div>
                                <p>As a Web Developer Intern My task is tto create a website of the Banking system and report to the Sparks Foundation Team </p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">November 2020 - Dec 2020</span></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Experience;
