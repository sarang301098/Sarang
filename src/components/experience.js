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
                                <h3 class="mb-0">Software Developer I</h3>
                                <div class="subheading mb-3">Peerbits</div>
                                <p>
                                    <ul>
                                        <li>Provided support, instructive opportunities and mentoring to junior individuals of the group moreover performed Hashing, and Optimal path Algorithms.</li>
                                        <li>Consolidated Software Design, QA testing, code optimizing and Deploying using Docker.</li>
                                        <li>Constructed reusable React Components by using React Router for client-side routing and Axios for making asynchronous HTTP requests and Redux state management with Jest unit testing.</li>
                                        <li>Outlined Database Patterns and Tables for large-scale Ventures in MySQL and MongoDB and utilized Redis to oversee complex relational query results specifically in Cache memory to upgrade query execution by 20-30%.</li>
                                        <li>Improved the functionality of the web extension for Chrome by streamlining Javascript ES6 events and unwanted API calls, which resulted in a 20% lessening in the server stack.v</li>
                                        <li>Define project roles and responsibilities in close collaboration with the Customer, including project scope and objectives to ensure a cross-functional understanding amongst project members.</li>
                                        <li>Ensure high-quality coding by using a comprehensive testing approach. Created project documentation for functional design, technical design, and data load process. </li>
                                    </ul>
                                </p>



                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">August 2020 - June 2022</span></div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">Web Development Intern</h3>
                                <div class="subheading mb-3">The Sparks Foundation</div>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">November 2020 - December 2020</span></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Experience;
