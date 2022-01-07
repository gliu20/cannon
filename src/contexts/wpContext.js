`query contextQuery {
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
}`