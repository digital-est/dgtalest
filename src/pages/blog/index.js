import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: 'rgb(25, 113, 163) 0.5rem 0 0, rgb(25, 113, 163) -0.5rem 0 0',
              backgroundColor: 'rgb(25, 113, 163)',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
            <div
            style={{
                alignSelf: 'flex-end',
                boxShadow: 'rgb(25, 113, 163) 0.5rem 0px 0px, rgb(25, 113, 163) -0.5rem 0px 0px',
                backgroundColor: 'rgb(25, 113, 163)',
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
                opacity: '0.7',
                fontSize: '0.6em'
      }}
        >
            Photo by Harald Arlander on Unsplash
            </div>

        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
