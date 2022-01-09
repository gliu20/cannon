import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/card"



const TagPage = ({ data, pageContext }) => {
  return (<Layout>
    <Section level={1}
      title={data.wpTag.name}
      description={data.wpTag.description ||
        `Stay up to date on news, events, and topics with ${data.wpTag.name} entries from Cannon contributors.`}
    >
      {data.wpTag.posts.nodes.map((post, i) =>
        <Card level={2}
          mediaSrc={post.node?.featuredImage?.node?.sourceUrl || true}
          mediaAlt={post.node?.featuredImage?.node?.alt || post.node?.featuredImage?.node?.title}
          mediaModifiers="picture--3by2"

          title={post.title}
          description={post.excerpt}
          subtitle={`By ${post.author.node.name}`}

          toSlug={post.slug}
          modifiers={`card--link card--horizontal${i === 0 ? ' card--featured' : ''}`}
        ></Card>)
      }
    </Section>
  </Layout>)
}

export default TagPage

// gatsby is smart enough to get category/tag based on
// id passed into this.props.pageContext
export const query = graphql`
  query($id: String) {
    wpTag(id: {eq: $id}) {
      posts {
        nodes {
          author {
            node {
              name
            }
          }
          excerpt
          title
          slug
          featuredImage {
            node {
              caption
              sourceUrl
            }
          }
        }
      }
      name
      description
    }
  }
`