import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"
import Stats from "../components/Stats"
import Email from '../components/Email'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
