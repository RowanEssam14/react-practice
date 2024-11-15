import { useState } from 'react'
import { Card, Pagination } from '../../components'
import { useGetCharacters } from '../../hooks'
import { getCharacterDescription } from '../../helper'
import styles from './Character.module.css'

const Characters = () => {
  const { characters, loading, error } = useGetCharacters()
  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 10

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  const totalPages = Math.ceil(characters.length / resultsPerPage)
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const currentCharacters = characters.slice(startIndex, endIndex)

  const handlePageClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Characters</h1>
      <div className={styles.cardsContainer}>
        {currentCharacters.map((character) => (
          <Card
            key={character.id}
            cover={character.src}
            title={character.name}
            description={getCharacterDescription(character)}
          />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageClick} />
    </div>
  )
}

export default Characters
