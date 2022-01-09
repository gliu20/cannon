import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Picture from "../components/picture"
import Tag from "../components/tag"
import Recommended from "../components/recommended"

//import  from "../lib/recommender"

import "../styles/article.scss"

// TODO a lot of complexity in one spot
// might want to refactor

const Article = ({ data, pageContext }) => {
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
      <Section renderAs="div">
        <div className="article__wrapper">
          <article className="article">
            <header className="article__header">
              <h1 class="article__title">{data.wpPost.title}</h1>
            </header>
            <div className="article__content" dangerouslySetInnerHTML={({
              '__html': data.wpPost.content
            })}></div>
          </article>
          <div className="article__sidebar">
            {
              data.wpPost.terms.nodes ?
                <Section renderAs="aside" title="Tags">
                  {
                    data.wpPost.terms.nodes.map(tag =>
                      <Tag to={tag.uri}>{tag.name}</Tag>)
                  }
                </Section> : ''
            }

            {
              // TODO add sharer
              //<Section renderAs="aside" title="Share"></Section>
            }
            <Section renderAs="aside" title="See also">
              <Recommended recommendedPosts={data.allWpPost}></Recommended>
            </Section>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Article

// gatsby is smart enough to get post based on
// id passed into this.props.pageContext
export const query = graphql`
  query($id: String, $topics: String) {
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
      terms {
        nodes {
          ... on WpCategory {
            name
            uri
          }
          ... on WpTag {
            name
            uri
          }
        }
      }
    }

    allWpPost(filter: {content: {regex: $topics}}) {
      edges {
          node {
              title
              author {
                  node {
                      name
                  }
              }
              slug
          }
      }
    }
  }
`