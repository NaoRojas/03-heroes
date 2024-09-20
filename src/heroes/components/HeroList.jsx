import { HeroCard } from './HeroCard'

export const HeroList = ({ heroList = [], publisher }) => {
  return (
    <div className="flex-col hero-section">
      <div className="flex-row baseline space-between">
        <h2 className="section-title primary-red">Heroes</h2>
        <h2 className="description primary-gray">See All</h2>
      </div>
      <div className="scroll-horizontal flex-row">
        {heroList.map((hero) => (
          <HeroCard key={hero.id} hero={hero} publisher={publisher} />
        ))}
      </div>
    </div>
  )
}
