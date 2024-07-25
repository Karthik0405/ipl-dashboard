// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}

  componentDidMount() {
    this.gettingTeams()
  }

  gettingTeams = async () => {
    const fetchData = await fetch('https://apis.ccbp.in/ipl')
    const data = await fetchData.json()
    const {teams} = data
    const updatedList = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImage: eachItem.team_image_url,
    }))
    console.log(updatedList)
    this.setState({
      iplTeamsList: updatedList,
      isLoading: false,
    })
  }

  render() {
    const {iplTeamsList, isLoading} = this.state
    return (
      <div className="home-background">
        <div className="ipl-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-logo-heading">IPL DASHBOARD</h1>
        </div>

        {isLoading ? (
          <div testid="loader" className="home">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-list-container">
            {iplTeamsList.map(eachItem => (
              <TeamCard eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
