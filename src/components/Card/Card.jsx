import PropTypes from 'prop-types'
import styles from './Card.module.css'

const Card = ({ cover, description, children, sticker, fit }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardMedia}>
        <img className={styles.cardImage} src={cover} alt="" style={{ objectFit: fit }} />
        {sticker && <strong className={styles.cardSticker}>+18</strong>}
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{children}</h2>
        <div className={styles.cardDetails}>
          {description.map((item) => (
            <div key={item.label} className={styles.cardDetail}>
              <span className={styles.itemLabel}>{item.label}: </span> <span>{item.value || 'N/A'}</span>
            </div>
          ))}
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
  description: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
    })
  ).isRequired,
  sticker: PropTypes.bool,
  children: PropTypes.node.isRequired,
  fit: PropTypes.oneOf(['contain', 'cover']),
}

export default Card
