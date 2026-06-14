import TopicImage from './TopicImage'

function PageHero({ eyebrow, title, summary, image }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="page-hero-copy reveal">
              {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
              <h1>{title}</h1>
              <p className="hero-subtitle">{summary}</p>
            </div>
          </div>
          {image ? (
            <div className="col-lg-6">
              <TopicImage image={image} className="page-hero-image reveal" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default PageHero
