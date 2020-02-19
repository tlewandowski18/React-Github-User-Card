import React, {Component} from 'react';
import UserCard from './UserCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}, 
      followers: [],
    }
  }

  componentDidMount(){
    fetch("https://api.github.com/users/tlewandowski18")
      .then(res => res.json())
      .then(res => {
        this.setState({data: res})
      })
      .catch(err => {
        console.log(err)
      })
    fetch("https://api.github.com/users/tlewandowski18/followers")
      .then(res => res.json())
      .then(res => {
        const idList = res.map(item => item.login)
        this.setState({followers: idList})
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
    console.log(this.state)
    return (
      <UserCard data={this.state.data} followers={this.state.followers}/>
    )
  }
}

export default App;
