// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImage} = eachItem
  return (
    <Link to={`/team-matches/${id}`} className="link-container">
      <li className="teams-item-container">
        <img src={teamImage} alt={name} className="team-logo-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
