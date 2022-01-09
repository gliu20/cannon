import * as React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

import "../styles/about.scss"

const AboutPage = () => {
    return (
        <Layout pageTitle="About - The Cannon Newspaper">
            <div className="about">
                <Section>
                    <h1>About</h1>
                    <p>The Cannon is the official (serious) newspaper of the University
                        of Toronto Engineering Society. Established in 1978, it serves
                        the undergraduate students of the Faculty of Applied Science
                        and Engineering.</p>
                    <p>The Cannon proudly shares articles about the Skule&trade; community,
                        opinion pieces, student life and more, with the goal of
                        connecting engineering students.</p>
                </Section>

                <Section>
                    <h2 id="about">Contribute</h2>
                    <p>Suggestions and articles are always welcome - no previous experience
                        necessary! Email <a href="mailto:cannon@g.skule.ca">cannon@g.skule.ca</a> to
                        find out more</p>
                </Section>

                <Section>
                    <h2>Contact</h2>
                    <p>
                        Facebook: <a href="">cannon.news</a><br></br>
                        Instagram: <a href="">c@cannon.news</a>
                    </p>
                    <p>
                        <address>
                            The Cannon<br></br>
                            10 King&apos;s College Road Sandford Fleming Building Room B740<br></br>
                            Toronto, ON<br></br>
                            M5S 3G4<br></br>
                        </address>
                    </p>
                    <p>Advertising and subscription information is available from the
                        Engineering Society at 416-978-2917.</p>
                </Section>
            </div>

        </Layout>
    )
}


export default AboutPage
