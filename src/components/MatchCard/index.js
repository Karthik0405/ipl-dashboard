// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = eachItem
  const resultClass = matchStatus === 'Lost' ? 'lose-result' : 'win-result'

  return (
    <li className="match-card-container">
      <img
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
        className="competing-team"
      />
      <p className="match-card-title">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`${resultClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
