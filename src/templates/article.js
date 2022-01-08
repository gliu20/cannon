import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Picture from "../components/picture"

const Article = ({ data }) => {
  return (
    <Layout pageTitle={data.wpPost.title}>
      <Section>
        <Picture src={data.wpPost?.featuredImage?.node?.sourceUrl}
          modifiers="picture--3by2"
        ></Picture>
        <p dangerouslySetInnerHTML={({
          '__html': data.wpPost?.featuredImage?.node?.caption
        })}></p>
      </Section>
      <Section>
        <header className="article__header">
          <h1>{data.wpPost.title}</h1>
        </header>
        <div className="article__content" dangerouslySetInnerHTML={({
          '__html': data.wpPost.content
        })}></div>
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
      featuredImage {
        node {
          caption
          sourceUrl
        }
      }
    }
  }
`