import * as React from 'react'
import Card from './card'



const Recommended = ({ recommendedPosts }) => {
    const posts = recommendedPosts.edges;
    return (
        <div>
            {
                posts.map(post =>
                    <Card
                        level={3}
                        title={post.node.title}
                        subtitle={post.node.author.node.name}
                        toSlug={post.node.slug}
                        modifiers="card--link"
                    ></Card>
                )
                    // randomly pick the top 10 from results
                    .map((value) => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
                    .slice(0, 10)
            }
        </div>
    )
}

export default Recommended
