import dc from '../../assets/dc.png'
import { HeroList } from '../components/HeroList'
import '../heroes.css'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const DCPage = () => {
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
      <div className="flex-row categories">
        <div className="category red-gradient">
          <img
            className="hero-category"
            src="/src/images/icons/Villain.svg"
            alt=""
          />
        </div>

        <div className="category purple-gradient">
          <img
            className="hero-category"
            src="/src/images/icons/Antihero.svg"
            alt=""
          />
        </div>

        <div className="category blue-gradient">
          <img
            className="hero-category"
            src="/src/images/icons/Hero.svg"
            alt=""
          />
        </div>
        <div className="category pink-gradient">
          <img
            className="hero-category"
            src="/src/images/icons/Human.svg"
            alt=""
          />
        </div>
        <div className="category green-gradient">
          <img
            className="hero-category"
            src="/src/images/icons/Alien.svg"
            alt=""
          />
        </div>
      </div>
      <HeroList
        publisher="DC Comics"
        heroList={getHeroesByPublisher('DC Comics')}
      />
    </div>
  )
}
