import { HeroButtonFilter } from './HeroButtonFilter'

export const HeroFilters = ({ setFilter }) => {
  const buttonFilters = [
    { gradiendtColor: 'red-gradient', type: 'Villain' },
    { gradiendtColor: 'purple-gradient', type: 'Antihero' },
    { gradiendtColor: 'blue-gradient', type: 'Hero' },
    { gradiendtColor: 'pink-gradient', type: 'Human' },
    { gradiendtColor: 'green-gradient', type: 'Alien' },
  ]
  return (
    <div className="flex-row categories">
      {buttonFilters.map((buttonFilter) => (
        <HeroButtonFilter
          key={buttonFilter.type}
          type={buttonFilter.type}
          gradiendtColor={buttonFilter.gradiendtColor}
        />
      ))}
    </div>
  )
}
