const getEpisodeDescription = (episode) => {
  return [
    {
      label: 'Episode',
      value: episode.episode_name,
    },
    {
      label: 'Director',
      value: episode.director,
    },
    {
      label: 'Producer',
      value: episode.producer,
    },
    {
      label: 'Release date',
      value: episode.release_date,
    },
  ]
}

const getCharactersDescription = (character) => {
  return [
    {
      label: 'Birth',
      value: character.birth_year,
    },
    {
      label: 'Gender',
      value: character.gender,
    },
  ]
}

const getCharacterDetails = (character) => {
  const details = [
    { label: 'Height', value: character.height },
    { label: 'Mass', value: character.mass },
    { label: 'Hair Color', value: character.hair_color },
    { label: 'Skin Color', value: character.skin_color },
    { label: 'Eye Color', value: character.eye_color },
    { label: 'Birth Year', value: character.birth_year },
    { label: 'Gender', value: character.gender },
    { label: 'Homeworld', value: character.homeworld.map((world) => world.name).join(', ') },
    { label: 'Films', value: character.films.map((film) => film.name).join(', ') },
    { label: 'Species', value: character.species.map((item) => item.name).join(', ') },
    { label: 'Vehicles', value: character.vehicles.map((vehicle) => vehicle.name).join(', ') },
    { label: 'Starships', value: character.starships.map((starship) => starship.name).join(', ') },
    { label: 'Created', value: character.created },
    { label: 'Edited', value: character.edited },
  ]

  return details
}

const getEpisodeDetails = (episode) => {
  const details = [
    { label: 'Episode', value: episode.episode_name },
    { label: 'Director', value: episode.director },
    { label: 'Producer', value: episode.producer },
    { label: 'Release Date', value: episode.release_date },
    { label: 'Characters', value: episode.characters.map((character) => character.name).join(', ') },
    { label: 'Planets', value: episode.planets.map((planet) => planet.name).join(', ') },
    { label: 'Starships', value: episode.starships.map((starship) => starship.name).join(', ') },
    { label: 'Vehicles', value: episode.vehicles.map((vehicle) => vehicle.name).join(', ') },
    { label: 'Species', value: episode.species.map((item) => item.name).join(', ') },
    { label: 'Created', value: episode.created },
    { label: 'Edited', value: episode.edited },
  ]

  return details
}

export { getEpisodeDescription, getCharactersDescription, getCharacterDetails, getEpisodeDetails }
