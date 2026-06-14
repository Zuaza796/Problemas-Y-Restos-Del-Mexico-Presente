import { topicImages } from '../data/topicImages'
import TopicImage from './TopicImage'
import ResponsiveTable from './ResponsiveTable'

function TopicSection({ topic, reverse = false }) {
  const textOrder = reverse ? 'order-1 order-lg-2' : 'order-1 order-lg-1'
  const imageOrder = reverse ? 'order-2 order-lg-1' : 'order-2 order-lg-2'

  return (
    <section id={topic.id} className="topic-section section-block">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className={`col-lg-6 ${textOrder}`}>
            <article className="topic-copy reveal">
              <p className="eyebrow">{topic.eyebrow}</p>
              <h2>{topic.title}</h2>
              <p className="topic-summary">{topic.summary}</p>
              {topic.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="highlight-list">
                {topic.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className={`col-lg-6 ${imageOrder}`}>
            <TopicImage image={topicImages[topic.imageKey]} className="reveal" />
          </div>
        </div>
        {topic.callout ? (
          <article className="info-callout reveal">
            <div className="card-icon" aria-hidden="true">
              <i className="bi bi-question-circle"></i>
            </div>
            <div>
              <h3>{topic.callout.title}</h3>
              <p>{topic.callout.text}</p>
            </div>
          </article>
        ) : null}
        <ResponsiveTable table={topic.table} />
      </div>
    </section>
  )
}

export default TopicSection
