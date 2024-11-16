import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Pagination } from '../../components'
import { fetchCharacters } from '../../store/slices/characters'
import { getCharactersDescription } from '../../helper'
import styles from './Character.module.css'

const Characters = () => {
  const dispatch = useDispatch()
  const { characters, loading, error } = useSelector((state) => state.characters)
  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 10

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const totalPages = Math.ceil(characters.length / resultsPerPage)
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const currentCharacters = characters.slice(startIndex, endIndex)

  const handlePageClick = (page) => setCurrentPage(page)

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Characters</h1>
      <div className={styles.cardsContainer}>
        {currentCharacters.map((character) => (
          <Card key={character.id} cover={character.src} description={getCharactersDescription(character)}>
            <Link to={`/characters/${character.id}`} className={styles.characterLink}>
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
