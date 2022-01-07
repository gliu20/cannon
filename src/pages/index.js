import * as React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/card"
import ArticleGallery from "../components/articleGallery"

const IndexPage = () => {
  return (
    <Layout pageTitle="The Cannon Newspaper">
      <Section title="Featured">
        <ArticleGallery left={
          <div>
            <Card
              level={3}
              title="Celebrating Occasions During COVID-19"
              subtitle="By Kirtana Devaraj"
              to="/"
              modifiers="card--link"
            ></Card>
            <Card
              level={3}
              mediaSrc="../images/peep.jpg"
              title="Not a Peep"
              subtitle="By Andrew Wuebbolt"
              to="/"
              modifiers="card--link"
            ></Card>
            <Card
              level={3}
              title="COVID-19 and the Sustainable Engineers Association"
              subtitle="By Adam Koa"
              to="/"
              modifiers="card--link"
            ></Card>
          </div>
        }

          right={
            <div>
              <Card
                level={3}
                title="Your Cicadian Rhythm and Online Learning"
                subtitle="By Vanessa Elizabeth Ayoung-Chee"
                to="/"
                modifiers="card--link"
              ></Card>
              <Card
                level={3}
                mediaSrc="../images/ads.jpg"
                title="Youtube's Most Annoying Ads Ranking, Finally Revealed"
                subtitle="By Ruknoon Dinder"
                to="/"
                modifiers="card--link"
              ></Card>
              <Card
                level={3}
                title="Celebrating Occasions During COVID-19"
                subtitle="By Kirtana Devaraj"
                to="/"
                modifiers="card--link"
              ></Card>
            </div>
          }

          center={
            <div>
              <Card
                level={3}
                mediaSrc="../images/mars.jpg"
                title="NASA's Perseverance Rover Landing"
                description="Mars: a world so far and foreign, but when you look at it
                  closer, you can imagine how the Earth looked before it got to its 
                  current state, with no civilization anywhere to be found..."
                subtitle="By Joel Majano"
                to="/"
                modifiers="card--link"
              ></Card>
            </div>
          }

        ></ArticleGallery>
      </Section>
      <Section title="Recent Articles">
        <Card
          level={3}
          mediaSrc="../images/placeholder.jpg"
          title="Your Cicadian Rhythm and Online Learning"
          subtitle="By Vanessa Elizabeth Ayoung-Chee"
          to="/"
          modifiers="card--link card--horizontal"
        ></Card>
        <Card
          level={3}
          mediaSrc="../images/ads.jpg"
          title="Youtube's Most Annoying Ads Ranking, Finally Revealed"
          subtitle="By Ruknoon Dinder"
          to="/"
          modifiers="card--link card--horizontal"
        ></Card>
        <Card
          level={3}
          mediaSrc="../images/placeholder.jpg"
          title="Celebrating Occasions During COVID-19"
          subtitle="By Kirtana Devaraj"
          to="/"
          modifiers="card--link card--horizontal"
        ></Card>
        <Card
          level={3}
          mediaSrc="../images/placeholder.jpg"
          title="Celebrating Occasions During COVID-19"
          subtitle="By Kirtana Devaraj"
          to="/"
          modifiers="card--link card--horizontal"
        ></Card>
        <Card
          level={3}
          mediaSrc="../images/placeholder.jpg"
          title="Celebrating Occasions During COVID-19"
          subtitle="By Kirtana Devaraj"
          to="/"
          modifiers="card--link card--horizontal"
        ></Card>
      </Section>
    </Layout >
  )
}

export default IndexPage
