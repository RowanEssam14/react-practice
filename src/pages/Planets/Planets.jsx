import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../../components'
import { getplanetsDescription } from '../../helper'
import { fetchPlanets } from '../../store/slices/planets'
import styles from './Planets.module.css'

const Planets = () => {
  const dispatch = useDispatch()
  const { planets, loading, error } = useSelector((state) => state.planets)

  useEffect(() => {
    dispatch(fetchPlanets())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Planets</h1>
      <div className={styles.cardsContainer}>
        {planets.map((planets) => (
          <Card key={planets.id} cover={planets.src} description={getplanetsDescription(planets)}>
            <Link to={`/planets/${planets.id}`} className={styles.planetsLink}>
              <h2 className={styles.cardTitle}>{planets.name}</h2>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Planets
