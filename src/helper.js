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
  return [
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
}

const getEpisodeDetails = (episode) => {
  return [
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
}

const getplanetsDescription = (planet) => {
  return [
    {
      label: 'Climate',
      value: planet.climate,
    },
    {
      label: 'Terrain',
      value: planet.terrain,
    },
    {
      label: 'Population',
      value: planet.population,
    },
  ]
}

const getPlanetDetails = (planet) => {
  return [
    { label: 'Rotation Period', value: planet.rotation_period },
    { label: 'Orbital Period', value: planet.orbital_period },
    { label: 'Diameter', value: planet.diameter },
    { label: 'Climate', value: planet.climate },
    { label: 'Gravity', value: planet.gravity },
    { label: 'Terrain', value: planet.terrain },
    { label: 'Surface Water', value: planet.surface_water },
    { label: 'Population', value: planet.population },
    { label: 'Residents', value: planet.residents.map((resident) => resident.name).join(', ') },
    { label: 'Films', value: planet.films.map((film) => film.name).join(', ') },
  ]
}

const getSpeciesDescription = (species) => {
  return [
    {
      label: 'Classification',
      value: species.classification,
    },
    {
      label: 'Designation',
      value: species.designation,
    },
  ]
}

const getSpeciesDetails = (species) => {
  return [
    { label: 'Classification', value: species.classification },
    { label: 'Designation', value: species.designation },
    { label: 'Average Lifespan', value: species.average_lifespan },
    { label: 'Average Height', value: species.average_height },
    { label: 'People', value: species.people.map((person) => person.name).join(', ') },
    { label: 'Planets', value: species.homeworld.map((planet) => planet.name).join(', ') },
    { label: 'Hair Colors', value: species.hair_colors },
    { label: 'Eye Colors', value: species.eye_colors },
    { label: 'Films', value: species.films.map((film) => film.name).join(', ') },
  ]
}
const getVehiclesDescription = (vehicle) => {
  return [
    {
      label: 'Model',
      value: vehicle.model,
    },
    {
      label: 'Manufacturer',
      value: vehicle.manufacturer,
    },
    {
      label: 'Cost in credits',
      value: vehicle.cost_in_credits.map((credit) => credit.toString()).join(', '),
    },
  ]
}

const getVehicleDetails = (vehicle) => {
  return [
    { label: 'Model', value: vehicle.model },
    { label: 'Manufacturer', value: vehicle.manufacturer },
    { label: 'Cost in credits', value: vehicle.cost_in_credits.map((credit) => credit.toString()).join(', ') },
    { label: 'Length', value: vehicle.length.map((length) => length.toString()).join(', ') },
    { label: 'Max atm.speed', value: vehicle.max_atmosphere_speed },
    { label: 'Crew', value: vehicle.crew },
    { label: 'Passengers', value: vehicle.passengers },
    { label: 'Cargo capacity', value: vehicle.cargo_capacity },
    { label: 'Consumables', value: vehicle.consumables },
    { label: 'Vehile class', value: vehicle.vehicle_class },
    { label: 'Pilots', value: vehicle.pilots },
  ]
}

const getStarshipsDescription = (starship) => {
  return [
    {
      label: 'Model',
      value: starship.model,
    },
    {
      label: 'Manufacturer',
      value: starship.manufacturer,
    },
    {
      label: 'Cost in credits',
      value: starship.cost_in_credits,
    },
  ]
}

const getStarshipDetails = (starship) => {
  return [
    { label: 'Model', value: starship.model },
    { label: 'Manufacturer', value: starship.manufacturer },
    { label: 'Cost in credits', value: starship.cost_in_credits },
    { label: 'Length', value: starship.length },
    { label: 'Max atm.speed', value: starship.max_atmosphering_speed },
    { label: 'Crew', value: starship.crew },
    { label: 'Passengers', value: starship.passengers },
    { label: 'Cargo capacity', value: starship.cargo_capacity },
    { label: 'Hyperdrive rating', value: starship.hyperdrive_rating },
    { label: 'MGLT', value: starship.MGLT },
    { label: 'Starship class', value: starship.starship_class },
    { label: 'Pilots', value: starship.pilots.map((pilot) => pilot.name).join(', ') },
  ]
}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export {
  getEpisodeDescription,
  getCharactersDescription,
  getCharacterDetails,
  getEpisodeDetails,
  getplanetsDescription,
  getPlanetDetails,
  getSpeciesDescription,
  getSpeciesDetails,
  getVehiclesDescription,
  getVehicleDetails,
  getStarshipsDescription,
  getStarshipDetails,
  capitalizeFirstLetter,
}
