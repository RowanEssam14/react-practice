import PropTypes from 'prop-types'
import styles from './Card.module.css'

const Card = ({ cover, title, description, sticker }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardMedia}>
          <img className={styles.cardImage} src={cover} alt="" />
          {sticker && <strong className={styles.cardSticker}>+18</strong>}
        </div>
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <div className={styles.cardDetails}>
            {description.map((item) => (
              <div key={item.label} className={styles.cardDetail}>
                <span>{item.label}: </span> <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  sticker: false,
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  sticker: PropTypes.bool,
}

export default Card
