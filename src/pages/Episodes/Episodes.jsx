import { Card } from '../../components'
import { useGetEpisodes } from '../../hooks'
import { getEpisodeDescription } from '../../helper'
import styles from './Episodes.module.css'

const Episodes = () => {
  const { episodes, loading, error } = useGetEpisodes()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Episodes</h1>
      <div className={styles.cardsContainer}>
        {episodes.map((episode) => (
          <Card
            key={episode.id}
            cover={episode.src}
            title={episode.name}
            sticker={true}
            description={getEpisodeDescription(episode)}
          />
        ))}
      </div>
    </div>
  )
}

export default Episodes
