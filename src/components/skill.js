import React from 'react';

class Skill extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <section class="resume-section" id="skills">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Skills</h2>
                        <div class="subheading mb-3">Programming Languages & Tools</div>
                        <ul class="list-inline dev-icons">
                            {/* <li class="list-inline-item"><i class="fab fa-code"></i></li> */}
                            <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                            <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                            <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                            <li class="list-inline-item"><i class="fab fa-react"></i></li>
                            <li class="list-inline-item"><i class="fab fa-node"></i></li>
                            <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                            <li class="list-inline-item"><i class="fab fa-java"></i></li>
                            <li class="list-inline-item"><i class="fab fa-aws"></i></li>
                            <li class="list-inline-item"><i class="fas fa-database"></i></li>
                        </ul>
                        <div class="subheading mb-3">Workflow</div>
                        <ul class="fa-ul mb-0">
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                HTML, CSS 
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                C, C++
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                JAVA, JSP & Servlets
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Java Script
                                <div class="subheading mt-3 mb-2">FrameWorks</div>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    NodeJS, ExpressJS
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    ReactJs
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    MeteorJs
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Bootstrap
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Docker
                                </li>
                            </li>
                        </ul>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Skill;
