import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Pagination } from '../../components'
import { useGetCurrentChapters } from '../../hooks'
import { fetchSpecies } from '../../store/slices/species'
import { ROUTES } from '../../constants'
import { getSpeciesDescription } from '../../helper'
import styles from './Species.module.css'

const Species = () => {
  const dispatch = useDispatch()
  const { species, loading, error } = useSelector((state) => state.species)
  const [currentPage, setCurrentPage] = useState(1)
  const { currentItems, totalPages } = useGetCurrentChapters(currentPage, species)

  const handlePageClick = (page) => setCurrentPage(page)

  useEffect(() => {
    dispatch(fetchSpecies())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Species</h1>
      <div className={styles.cardsContainer}>
        {currentItems.map((item) => (
          <Card key={item.id} cover={item.src} description={getSpeciesDescription(item)} fit="contain">
            <Link to={`${ROUTES.SPECIES}/${item.id}`} className={styles.speciesLink}>
              {item.name}
            </Link>
          </Card>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageClick} />
    </div>
  )
}

export default Species
