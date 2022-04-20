import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {imageUrl, name, description} = eachPlanet
  return (
    <div className="plant-item-container">
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
