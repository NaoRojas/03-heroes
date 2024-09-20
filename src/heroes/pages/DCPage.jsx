import dc from '../../assets/dc.png'
import { HeroList } from '../components/HeroList'
import '../heroes.css'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroFilters } from '../components/HeroFilters'
export const DCPage = () => {
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
        <img
          src={dc}
          style={{ width: '100px', height: '100px' }}
          className="logo"
          alt="React logo"
        />
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
          publisher="DC Comics"
          heroList={getHeroesByPublisher('DC Comics', heroType[type])}
          heroType={heroType[type]}
        />
      ))}
    </div>
  )
}
