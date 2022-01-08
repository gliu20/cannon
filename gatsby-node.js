

exports.createPages = async ({ actions, grapql, reporter }) => {
    const result = grapql`
    {
        allWpPost {
            nodes {
                id
                slug
            }
        }
    }
    `;

    if (result.errors) {
        reporter.error("Error fetching Wordpress data. Probably has to do with the graphql query in gatsby-node.js", result.errors);
    }

    const posts = result.data.allWpPost;
    const template = require.resolve(`./src/templates/article.js`)

    posts.nodes.forEach(post => {
        actions.createPage({
            path: `/articles/${post.slug}`,
            component: template,
            // sends post object to template
            // under this.props.pageContext
            context: post 
        })
    });
}