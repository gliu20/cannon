import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/card"

import "../styles/category.scss"


const Category = ({ data, pageContext }) => {
  return (<Layout>
    <Section level={1}
      title={data.wpCategory.name}
      description={data.wpCategory.description}
    >
      {data.wpCategory.posts.nodes.map(post =>
        <Card level={2}
          mediaSrc={post.node?.featuredImage?.node?.sourceUrl || true}
          mediaAlt={post.node?.featuredImage?.node?.alt || post.node?.featuredImage?.node?.title}
          mediaModifiers="picture--3by2"

          title={post.title}
          description={post.excerpt}
          subtitle={`By ${post.author.node.name}`}

          toSlug={post.slug}
          modifiers="card--link card--horizontal"
        ></Card>)
      }
    </Section>
  </Layout>)
}

export default Category

// gatsby is smart enough to get category/tag based on
// id passed into this.props.pageContext
export const query = graphql`
  query($id: String) {
    wpCategory(id: {eq: $id}) {
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