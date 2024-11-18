import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { BreadCrumb } from '..'
import styles from './CardDetail.module.css'

const CardDetails = ({ data, details, notFoundMessage }) => {
  const { id } = useParams()

  const item = data.find((dataItem) => dataItem.id === parseInt(id))

  if (!item) {
    return <p>{notFoundMessage}</p>
  }

  const itemDetails = details(item)

  return (
    <div className={styles.cardContainer}>
      <header className={styles.header}>
        <BreadCrumb />
      </header>
      <div className={styles.main}>
        <div className={styles.media}>
          <img className={styles.mediaContent} src={item.src} alt={item.name} />
        </div>
        <div className={styles.cardDetails}>
          <h1 className={styles.title}>{item.name}</h1>
          {itemDetails.map((detail) => (
            <div key={detail.label} className={styles.cardDetail}>
              <span className={styles.label}>{detail.label}: </span>
              <span className={styles.value}>{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

CardDetails.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  details: PropTypes.func.isRequired,
  notFoundMessage: PropTypes.string.isRequired,
}

export default CardDetails
