import { Card } from '../../components'
import { useGetCharacters } from '../../hooks'
import { getCharacterDescription } from '../../helper'
import styles from './Character.module.css'
const Characters = () => {
  const { characters, loading, error } = useGetCharacters()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Characters</h1>
      <div className={styles.cardsContainer}>
        {characters.map((character) => (
          <Card
            key={character.id}
            cover={character.src}
            title={character.name}
            description={getCharacterDescription(character)}
          />
        ))}
      </div>
    </div>
  )
}

export default Characters
