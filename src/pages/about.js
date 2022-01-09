import * as React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

const AboutPage = () => {
    return (
        <Layout pageTitle="About - The Cannon Newspaper">
            <Section title="About" level={1}>
                <h2>History</h2>
                <p>The Cannon is the official (serious) newspaper of the University
                    of Toronto Engineering Society. Established in 1978, it serves
                    the undergraduate students of the Faculty of Applied Science
                    and Engineering.</p>
                <p>The Cannon proudly shares articles about the Skule&trade; community,
                    opinion pieces, student life and more, with the goal of
                    connecting engineering students.</p>

                <h2>Contribute</h2>
                <p>Suggestions and articles are always welcome - no previous experience
                    necessary! Email <a href="mailto:cannon@g.skule.ca">cannon@g.skule.ca</a>
                    to find out more</p>
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
                <p>Advertising and subscription information is available from the Engineering Society at 416-978-2917.</p>
            </Section>
        </Layout >
    )
}


export default AboutPage
