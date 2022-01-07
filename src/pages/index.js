import * as React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/card"
import ArticleGallery from "../components/articleGallery"

const IndexPage = () => {
  return (
    <Layout pageTitle="Hello">
      <Section title="Top Highlights">
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
              title="Celebrating Occasions During COVID-19"
              subtitle="By Kirtana Devaraj"
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
        
        right={
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
              title="Celebrating Occasions During COVID-19"
              subtitle="By Kirtana Devaraj"
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
              title="Celebrating Occasions During COVID-19"
              subtitle="By Kirtana Devaraj"
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
            <Card
              level={3}
              title="Celebrating Occasions During COVID-19"
              subtitle="By Kirtana Devaraj"
              to="/"
              modifiers="card--link"
            ></Card>
          </div>
        }
        
        ></ArticleGallery>
      </Section>
    </Layout >
  )
}

export default IndexPage
