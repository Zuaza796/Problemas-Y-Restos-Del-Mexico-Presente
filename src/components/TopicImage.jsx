import { useState } from 'react'

function TopicImage({ image, className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className={`topic-visual ${className}`}>
      {failed ? (
        <div className="image-fallback" role="img" aria-label={image.alt}>
          Imagen no disponible
        </div>
      ) : (
        <img
          className="topic-image"
          src={image.src}
          alt={image.alt}
          onError={() => setFailed(true)}
        />
      )}
      <figcaption>{image.caption}</figcaption>
    </figure>
  )
}

export default TopicImage
