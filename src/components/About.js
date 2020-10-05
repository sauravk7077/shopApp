import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function About() {
    return (
        <section id="about">
            <Fade>
                <h2>About</h2>
                <p>This is a project by Saurav Kumar. To check out the source code of this project, click the button below.</p>
                <div><a className="btn" href="https://github.com/sauravk7077/shopapp">
                    <FontAwesomeIcon icon={faGithub}/>
                    &nbsp;Visit GitHub Page
                </a></div>
            </Fade>
        </section>
    )
}

export default About;