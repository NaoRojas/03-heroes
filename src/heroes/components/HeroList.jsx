import { HeroCard } from './HeroCard'

export const HeroList = ({ heroList = [], publisher, heroType }) => {
  return (
    <div className="flex-col hero-section">
      <div className="flex-row baseline space-between">
        <h2 className="section-title primary-red">{heroType}</h2>
        <h2 className="description primary-gray">See All</h2>
      </div>
      <div className="scroll-horizontal flex-row">
        {heroList.length > 0 ? (
          heroList.map((hero) => (
            <HeroCard key={hero.id} hero={hero} publisher={publisher} />
          ))
        ) : (
          <h1 className="description">No heroes found</h1>
        )}
      </div>
    </div>
  )
}
