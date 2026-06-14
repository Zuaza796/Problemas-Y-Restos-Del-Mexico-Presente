import { useEffect } from 'react'

const siteTitle = 'Problemas y retos de el México presente'

function PageLayout({ title, children }) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteTitle}` : siteTitle
  }, [title])

  return <main>{children}</main>
}

export default PageLayout
