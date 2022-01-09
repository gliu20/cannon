import * as React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

const IssuesPage = () => {
    return (
        <Layout pageTitle="Issues - The Cannon Newspaper">
            <Section
                title="Issues"
                level={1}
                description="Viewing issues is not available yet. 
                Visit <a href='https://issuu.com/thecannon'>https://issuu.com/thecannon</a>
                instead.">
            </Section>
        </Layout >
    )
}


export default IssuesPage
