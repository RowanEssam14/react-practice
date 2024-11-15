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

const getCharacterDescription = (character) => {
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

export { getEpisodeDescription, getCharacterDescription }
