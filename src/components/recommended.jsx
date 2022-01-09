import * as React from 'react'
import Card from './card'



const Recommended = ({ recommendedPosts }) => {
    const posts = recommendedPosts;
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
            }
        </div>
    )
}

export default Recommended
