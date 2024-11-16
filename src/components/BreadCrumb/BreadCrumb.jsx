import styles from './Breadcrumb.module.css'
import { Link, useLocation } from 'react-router-dom'

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const BreadCrumb = () => {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)

  const renderBreadcrumbs = () => {
    return paths.slice(0, -1).map((path, index) => {
      const breadcrumbText = capitalizeFirstLetter(path)

      const url = `/${paths.slice(0, index + 1).join('/')}`

      return (
        <span key={index}>
          <Link className={styles.breadcrumbLink} to={url}>
            {breadcrumbText}
          </Link>
          {index < paths.length - 2 && <span> / </span>}
        </span>
      )
    })
  }

  return (
    <div className={styles.breadcrumb}>
      <Link className={styles.breadcrumbHome} to="/">
        Home
      </Link>
      {paths.length > 0 && <span> / </span>}
      {renderBreadcrumbs()}
    </div>
  )
}

export default BreadCrumb
