import { useParams, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BreadCrumb } from '../../components'
import { getCharacterDetails, getEpisodeDetails, getPlanetDetails } from '../../helper'
import styles from './CardList.module.css'

const CardDetails = () => {
  const { id } = useParams()
  const location = useLocation()
  const { characters } = useSelector((state) => state.characters)
  const { episodes } = useSelector((state) => state.episodes)
  const { planets } = useSelector((state) => state.planets)

  const routeType = location.pathname.split('/')[1]
  let data = []
  let details = []
  let notFoundMessage = ''

  switch (routeType) {
    case 'characters':
      data = characters
      details = getCharacterDetails
      notFoundMessage = 'Character not found'
      break
    case 'episodes':
      data = episodes
      details = getEpisodeDetails
      notFoundMessage = 'Episode not found'
      break
    case 'planets':
      data = planets
      details = getPlanetDetails
      notFoundMessage = 'Planet not found'
      break
    default:
      return <p>Invalid route</p>
  }

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

export default CardDetails
