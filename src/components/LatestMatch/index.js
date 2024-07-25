// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatchDetails
    return (
      <div className="latest-match-container">
        <div className="latest-match-logo-container">
          <div>
            <p className="latest-match-details-2">{competingTeam}</p>
            <p className="latest-match-details-2">{date}</p>
            <p className="latest-match-details ">{venue}</p>
            <p className="latest-match-details">{result}</p>
          </div>
          <img
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
            className="latest-team-logo"
          />
        </div>
        <div>
          <div className="scores-list">
            <p className="headings">First Innings</p>
            <p className="contents">{firstInnings}</p>
          </div>
          <div>
            <p className="headings">Second Innings</p>
            <p className="contents">{secondInnings}</p>
          </div>
          <div>
            <p className="headings">Man of the Match</p>
            <p className="contents">{manOfTheMatch}</p>
          </div>
          <div>
            <p className="headings">Umpires</p>
            <p className="contents">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
