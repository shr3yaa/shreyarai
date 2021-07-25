import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Typical from 'react-typical'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome!</h1>
    <p>Hello, I'm Shreya!</p>
    <p>I am {" "}
      <Typical 
      loop={Infinity}
      wrapper="b"
      steps={[
        'a motivated student',
        1000,
        'an aspiring software engineer',
        1000,
        'a web designer',
        1000,
        'a data lover',
        1000,
        'a machine learning enthusiast',
        1000,
      ]}
      />
      </p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
