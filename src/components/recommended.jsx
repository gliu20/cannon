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

                    // this sequence ensures a good mix of recent
                    // and old articles

                    // it works by funnelling articles down progressive
                    // rolls where articles remaining at the top of the list stay 

                    // randomly picking the top 50 from results
                    // but favouring recent articles
                    .map((value, i) => ({ value, sort: Math.random() * (i + 1) }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
                    .slice(0, 50)

                    // randomly pick the top 25 from results
                    // but favouring articles still at the top of the top list
                    .map((value, i) => ({ value, sort: Math.random() * (i + 1) }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
                    .slice(0, 25)

                    // randomly pick the top 10 from results
                    // but favouring articles still at the top of the list
                    .map((value, i) => ({ value, sort: Math.random() * (i + 1) }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
                    .slice(0, 10)
            }
        </div>
    )
}

export default Recommended
