import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCharacterDetails, getEpisodeDetails } from '../../helper'
import styles from './CardList.module.css'

const CardList = () => {
  const { id } = useParams()
  const { characters } = useSelector((state) => state.characters)
  const { episodes } = useSelector((state) => state.episodes)

  const isCharacterRoute = window.location.pathname.includes('/characters')
  const data = isCharacterRoute ? characters : episodes

  const item = data.find((dataItem) => dataItem.id === parseInt(id))

  if (!item) {
    return <p>{isCharacterRoute ? 'Character not found' : 'Episode not found'}</p>
  }

  const details = isCharacterRoute ? getCharacterDetails(item) : getEpisodeDetails(item)

  return (
    <div className={styles.cardContainer}>
      <header className={styles.header}>Home/ </header>
      <div className={styles.main}>
        <div className={styles.media}>
          <img className={styles.mediaContent} src={item.src} alt="" />
        </div>
        <div className={styles.cardDetails}>
          <h1 className={styles.title}>{item.name}</h1>
          {details.map((detail) => (
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

export default CardList
