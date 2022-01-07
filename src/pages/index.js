import * as React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/card"

const IndexPage = () => {
  return (
    <Layout pageTitle="Hello">
      <Section title="Top Highlights">
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
      </Section>
    </Layout >
  )
}

export default IndexPage
