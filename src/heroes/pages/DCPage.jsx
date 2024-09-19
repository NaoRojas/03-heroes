import dc from '../../assets/dc.png'
import '../heroes.css'

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
      <div className="flex-col hero-section">
        <div className="flex-row baseline space-between">
          <h2 className="section-title primary-red">Heroes</h2>
          <h2 className="description primary-gray">See All</h2>
        </div>
        <div className="scroll-horizontal flex-row">
          <div className="hero-card">
            <img
              className="hero-image"
              src="/src/images/heroes/black.png"
              alt=""
            />
            <div className="flex-col start hero-card-body">
              <h3 className="card-subtitle primary-gray">T'Challa</h3>
              <h3 className="card-title primary-white text-start">
                Black Panther
              </h3>
            </div>
          </div>
          <div className="hero-card">
            <img
              className="hero-image"
              src="/src/images/heroes/ironman.png"
              alt=""
            />
            <div className="flex-col start hero-card-body">
              <h3 className="card-subtitle primary-gray">
                Anthony Edward Stark
              </h3>
              <h3 className="card-title primary-white text-start">Iron Man</h3>
            </div>
          </div>
          <div className="hero-card">
            <img
              className="hero-image"
              src="/src/images/heroes/spiderman.png"
              alt=""
            />
            <div className="flex-col start hero-card-body">
              <h3 className="card-subtitle primary-gray">Peter Parker</h3>
              <h3 className="card-title primary-white text-start">Spiderman</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
