export const HeroCard = ({ hero, publisher }) => {
  function imageName() {
    const firstWord = hero.superhero.split(' ')[0].toLowerCase()
    return publisher === 'DC Comics' ? 'dc-' + firstWord : 'marvel-' + firstWord
  }
  return (
    <div className="hero-card" key={hero.id}>
      <img
        className="hero-image"
        src={`/src/images/heroes/${imageName()}.jpg`}
        alt=""
      />
      <div className="flex-col start hero-card-body">
        <h3 className="card-title primary-white text-start superhero">
          {hero.superhero}
        </h3>
        <h3 className="card-subtitle primary-silver">{hero.alter_ego}</h3>
      </div>
      <div className="overlay"></div>
    </div>
  )
}
