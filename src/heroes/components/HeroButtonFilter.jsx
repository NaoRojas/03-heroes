export const HeroButtonFilter = ({ gradiendtColor, type }) => {
  return (
    <div className={`category ${gradiendtColor}`}>
      <img
        className="hero-category"
        src={`/src/images/icons/${type}.svg`}
        alt=""
      />
    </div>
  )
}
