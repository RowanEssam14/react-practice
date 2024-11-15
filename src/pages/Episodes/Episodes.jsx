import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../../components'
import { fetchEpisodes } from '../../store/slices/episodes'
import { getEpisodeDescription } from '../../helper'
import styles from './Episodes.module.css'

const Episodes = () => {
  const dispatch = useDispatch()
  const { episodes, loading, error } = useSelector((state) => state.episodes)

  useEffect(() => {
    dispatch(fetchEpisodes())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

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
