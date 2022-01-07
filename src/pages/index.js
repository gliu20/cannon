import * as React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/card"

const IndexPage = () => {
  return (
    <Layout pageTitle="Hello">
      <Section title={
        <h2 className="section__title">Top Highlights</h2>
      }>
        <Card
          level={3}
          title="Celebrating Occasions During COVID-19"
          subtitle="By Kirtana Devaraj"
        ></Card>
        <p>This is some content 1</p>
        <p>This is some content 10</p>
      </Section>
    </Layout>
  )
}

export default IndexPage
