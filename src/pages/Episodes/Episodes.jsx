import { useGetEpisodes } from '../../hooks'
import styles from './Episodes.module.css'
const Episodes = () => {
  const { films, loading, error } = useGetEpisodes()
  const filmKeys = ['name', 'director', 'producer', 'release_date']

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
        {films.map((film) => (
          <div key={film.id} className={styles.card}>
            <div className={styles.cardMedia}>
              <img className={styles.cardImage} src={film.src} alt="film-image" />
              <strong className={styles.cardSticker}>+18</strong>
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{film.name}</h2>
              <div className={styles.cardDetails}>
                <div className={styles.cardLabel}>
                  <p>{filmKeys[0]}:</p>
                  <p>{filmKeys[1]}</p>
                  <p>{filmKeys[2]}:</p>
                  <p>{filmKeys[3]}:</p>
                </div>
                <div className={styles.cardValue}>
                  <p>{film.name}</p>
                  <p>{film.director}</p>
                  <p>{film.producer}</p>
                  <p>{film.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Episodes
