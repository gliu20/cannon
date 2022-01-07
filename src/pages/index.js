import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/card"
import ArticleGallery from "../components/articleGallery"

const IndexPage = ({ data }) => {

  const posts = data.allWpPost.edges;

  const featuredPosts = posts.slice(0, 7);
  const featuredPostsCenter = featuredPosts.slice(0, 1);
  const featuredPostsLeft = featuredPosts.slice(1, 4);
  const featuredPostsRight = featuredPosts.slice(4, 7);

  const recentPosts = posts.slice(7,17);

  return (
    <Layout pageTitle="The Cannon Newspaper">
      <Section title="Featured">
        <ArticleGallery left={
          <div>
            {
              featuredPostsLeft.map(post => <Card
                level={3}
                mediaSrc={post.node?.featuredImage?.node?.sourceUrl || true}
                mediaAlt={post.node?.featuredImage?.node?.alt || post.node?.featuredImage?.node?.title}
                mediaModifiers="picture--3by2"
                title={post.node.title}
                subtitle={`By ${post.node.author.node.name}`}
                to={post.node.slug}
                modifiers="card--link"
              ></Card>)
            }
          </div>
        }

          right={
            <div>
              {
                featuredPostsRight.map(post => <Card
                  level={3}
                  mediaSrc={post.node?.featuredImage?.node?.sourceUrl || true}
                  mediaAlt={post.node?.featuredImage?.node?.alt || post.node?.featuredImage?.node?.title}
                  mediaModifiers="picture--3by2"
                  title={post.node.title}
                  subtitle={`By ${post.node.author.node.name}`}
                  to={post.node.slug}
                  modifiers="card--link"
                ></Card>)
              }
            </div>
          }

          center={
            <div>
              {
                featuredPostsCenter.map(post => <Card
                  level={3}
                  mediaSrc={post.node?.featuredImage?.node?.sourceUrl || true}
                  mediaAlt={post.node?.featuredImage?.node?.alt || post.node?.featuredImage?.node?.title}
                  mediaModifiers="picture--3by2"
                  title={post.node.title}
                  subtitle={`By ${post.node.author.node.name}`}
                  description={post.node.excerpt}
                  to={post.node.slug}
                  modifiers="card--link"
                ></Card>)
              }
            </div>
          }

        ></ArticleGallery>
      </Section>
      <Section title="Recent Articles">
        {
          recentPosts.map(post => <Card
            level={3}
            mediaSrc={post.node?.featuredImage?.node?.sourceUrl || true}
            mediaAlt={post.node?.featuredImage?.node?.alt || post.node?.featuredImage?.node?.title}
            mediaModifiers="picture--3by2"
            title={post.node.title}
            subtitle={`By ${post.node.author.node.name}`}
            to={post.node.slug}
            modifiers="card--link card--horizontal"
          ></Card>)
        }
      </Section>
    </Layout >
  )
}

export const query = graphql`query contextQuery {
  allWpPost {
    edges {
      node {
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            title
            altText
          }
        }
        author {
          node {
            name
          }
        }
        date
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
}
`

export default IndexPage
