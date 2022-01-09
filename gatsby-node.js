

const denyList = {
    "a": true, "b": true, "c": true, "d": true, "e": true, "f": true,
    "g": true, "h": true, "i": true, "j": true, "k": true, "l": true,
    "m": true, "n": true, "o": true, "p": true, "q": true, "r": true,
    "s": true, "t": true, "u": true, "v": true, "w": true, "x": true,
    "nt": true, "being": true, "were": true, "won": true, "didn": true,
    "through": true, "things": true, "https": true, "http": true,
    "y": true, "z": true, "to": true, "of": true, "and": true, "in": true,
    "the": true, "are": true, "was": true, "is": true, "be": true,
    "that": true, "have": true, "i": true, "it": true, "for": true,
    "not": true, "on": true, "with": true, "he": true, "as": true,
    "you": true, "do": true, "at": true, "this": true, "but": true,
    "his": true, "by": true, "from": true, "they": true, "we": true,
    "say": true, "her": true, "she": true, "or": true, "an": true,
    "will": true, "my": true, "one": true, "all": true, "would": true,
    "there": true, "their": true, "what": true, "so": true, "up": true,
    "out": true, "if": true, "about": true, "who": true, "get": true,
    "which": true, "go": true, "me": true, "when": true, "make": true,
    "can": true, "like": true, "time": true, "no": true, "just": true,
    "him": true, "know": true, "take": true, "people": true, "into": true,
    "year": true, "your": true, "good": true, "some": true, "could": true,
    "them": true, "see": true, "other": true, "than": true, "then": true,
    "now": true, "look": true, "only": true, "come": true, "its": true,
    "over": true, "think": true, "also": true, "back": true, "after": true,
    "use": true, "two": true, "how": true, "our": true, "work": true,
    "first": true, "well": true, "way": true, "even": true, "new": true,
    "want": true, "because": true, "any": true, "these": true, "give": true,
    "day": true, "most": true, "us": true, "had": true, "did": true,
    "myself": true, "become": true, "became": true, "more": true, "com": true,
    "srcset": true,
};

const countWords = (acc, val) => {

    // don't count words on denyList
    if (denyList[val]) return acc;

    // update accumulator
    acc[val] = acc[val] || 0;
    acc[val]++;

    return acc;
};

const extractTopicWords = (content) => {
    const wordCounts = content
        // crappy HTML remover
        .replace(/<[^>]+?>/g, '')
        .match(/\w+/g)
        .map(i => i.toLowerCase())
        .reduce(countWords, {});

    const topWordCounts = Object.entries(wordCounts)
        // get top word count words
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(i => i[0])

    return topWordCounts;
}

const createArticlePages = ({ result, actions }) => {
    const posts = result.data.allWpPost;
    const template = require.resolve(`./src/templates/article.js`)

    posts.nodes.forEach(post => {

        const topics = extractTopicWords(post.content);
        actions.createPage({
            path: `/articles/${post.slug}/`,
            component: template,
            // sends post object to template
            // under this.props.pageContext
            context: {
                id: post.id,
                // add topics regex for recommendation engine
                topics: topics,
                topicsRegex: `/${topics.join("|")}/gi`
            }
        })
    });
}

const createCategoryPages = ({ result, actions }) => {
    const categories = result.data.allWpCategory;
    const template = require.resolve(`./src/templates/category.js`)

    categories.nodes.forEach(category => {

        createRedirect({
            fromPath: category.slug,
            toPath: category.uri,
        });

        actions.createPage({
            path: category.uri,
            component: template,
            // sends to template via this.props.pageContext
            context: {
                id: category.id,
            }
        })
    });
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    {
        allWpPost {
            nodes {
                id
                slug
                content
            }
        }
        allWpCategory {
            nodes {
                id
                uri
                slug
            }
        }
    }
    `);

    if (result.errors) {
        reporter.error("Error fetching Wordpress data. Probably has to do with the graphql query in gatsby-node.js", result.errors);
    }

    createArticlePages({ result, actions });
    createCategoryPages({ result, actions });
}