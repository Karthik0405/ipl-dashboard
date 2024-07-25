// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetailsList: [], isLoading: true}

  componentDidMount() {
    this.gettingTeamDetails()
  }

  gettingTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teamDetails = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await teamDetails.json()
    const updatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: {
        id: fetchedData.latest_match_details.id,
        competingTeam: fetchedData.latest_match_details.competing_team,
        competingTeamLogo: fetchedData.latest_match_details.competing_team_logo,
        date: fetchedData.latest_match_details.date,
        firstInnings: fetchedData.latest_match_details.first_innings,
        manOfTheMatch: fetchedData.latest_match_details.man_of_the_match,
        matchStatus: fetchedData.latest_match_details.match_status,
        result: fetchedData.latest_match_details.result,
        secondInnings: fetchedData.latest_match_details.second_innings,
        umpires: fetchedData.latest_match_details.umpires,
        venue: fetchedData.latest_match_details.venue,
      },
      recentMatches: fetchedData.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    this.setState({teamDetailsList: updatedData, isLoading: false})
  }

  render() {
    const {teamDetailsList, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetailsList
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`${id} team-matches-container`}>
        {isLoading ? (
          <div testid="loader" className="loder-class">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="team-matches-container-2">
              <img
                src={teamBannerUrl}
                alt="team banner"
                className="team-matches-image"
              />
              <h1 className="latest-match-heading">Latest matches</h1>
            </div>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-matches-container">
              {recentMatches.map(eachItem => (
                <MatchCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
