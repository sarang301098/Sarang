import React from 'react';

class About extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <section class="resume-section" id="about">
                    <div class="resume-section-content">
                        <h1 class="mb-0">
                            Sarang
                            <span class="text-primary">Patel</span>
                        </h1>
                        <div class="subheading mb-5">
                            201-202 Rudra Residency, 4-Nilkanth Nagar, B/H Apsara Cinema, Kankaria, Ahmedabad, 380022 <br />
                            +91 9601005881 <br />
                            <a href="mailto:sarangp021@gmail.com">sarangp021@gmail.com</a>
                        </div>
                        <p class="lead mb-5">I am experienced in React, Nodejs & MeteorJs and MongoDB which Provides robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div class="social-icons">
                            <a class="social-icon" href="https://www.linkedin.com/in/sarang-patel-785b4a1a4/"><i class="fab fa-linkedin-in"></i></a>
                            <a class="social-icon" href="https://github.com/sarang301098"><i class="fab fa-github"></i></a>
                            <a class="social-icon" href="https://twitter.com/sarang_3010"><i class="fab fa-twitter"></i></a>
                            <a class="social-icon" href="https://www.facebook.com/sarang.patel.12576"><i class="fab fa-facebook-f"></i></a>
                            <a class="social-icon" href="https://www.instagram.com/sarang_3010/"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default About;
