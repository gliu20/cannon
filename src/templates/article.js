import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"

const Article = ({ data }) => {
    return (
        <Layout pageTitle={data.wpPost.title}>
            <Section>
              {data.wpPost.title}
              {data.wpPost.content}
            </Section>
        </Layout>
    )
}

export default Article

// gatsby is smart enough to get post based on
// id passed into this.props.pageContext
export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`