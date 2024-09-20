import marvel from '../../assets/marvel.svg'
import { HeroFilters } from '../components/HeroFilters'
import { HeroList } from '../components/HeroList'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import '../heroes.css'

export const MarvelPage = () => {
  const heroType = {
    hero: 'Hero',
    villain: 'Villain',
    antihero: 'Antihero',
    human: 'Human',
    alien: 'Alien',
  }

  return (
    <div className="body-content">
      <div className="flex-row center">
        <img src={marvel} className="logo" alt="React logo" />
      </div>
      <div className="flex-col start">
        <h1 className="home-subtitle primary-gray">
          Welcome to the Marvel Universe
        </h1>
        <h1 className="heavy-title primary-dark">
          Choose your favorite Marvel character
        </h1>
      </div>
      <HeroFilters />
      {Object.keys(heroType).map((type) => (
        <HeroList
          key={type}
          publisher="Marvel Comics"
          heroList={getHeroesByPublisher('Marvel Comics', heroType[type])}
          heroType={heroType[type]}
        />
      ))}
    </div>
  )
}
