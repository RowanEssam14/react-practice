import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Pagination } from '../../components'
import { useGetCurrentChapters } from '../../hooks'
import { fetchCharacters } from '../../store/slices/characters'
import { ROUTES } from '../../constants'
import { getCharactersDescription } from '../../helper'
import styles from './Character.module.css'

const Characters = () => {
  const dispatch = useDispatch()
  const { characters, loading, error } = useSelector((state) => state.characters)
  const [currentPage, setCurrentPage] = useState(1)
  const { currentItems, totalPages } = useGetCurrentChapters(currentPage, characters)

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const handlePageClick = (page) => setCurrentPage(page)

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Characters</h1>
      <div className={styles.cardsContainer}>
        {currentItems.map((character) => (
          <Card key={character.id} cover={character.src} description={getCharactersDescription(character)} fit="cover">
            <Link to={`${ROUTES.CHARACTERS}/${character.id}`} className={styles.characterLink}>
              {character.name}
            </Link>
          </Card>
        ))}
      </div>

      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageClick} />
    </div>
  )
}

export default Characters
