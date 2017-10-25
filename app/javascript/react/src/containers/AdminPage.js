import React, {Component} from 'react';
import { Link } from 'react-router'
import UserTile from '../components/UserTile'

class AdminPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }

    this.deleteUser = this.deleteUser.bind(this)
  }

  componentDidMount(){
    let id = this.props.id
    fetch(`http://localhost:3000/api/v1/users/1.json`,{
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(response => {
        this.setState({ users: response })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    deleteUser(user_id){
      fetch(`http://localhost:3000/api/v1/users/${user_id}.json`,{
        credentials: 'same-origin',
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body =>{
        this.setState({ users: body})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }



  render(){

    console.log(this.state.users)
    let users = this.state.users.map( user => {
      let handleDeleteEvent = () => {
        this.deleteUser(user.id)
      }
      return(
        <UserTile
          key={user.id}
          email={user.email}
          username={user.username}
          first_name={user.first_name}
          last_name={user.last_name}
          avatar={user.avatar.url}
          handleClick={handleDeleteEvent}
        />
      )
    })
    return(
      <div>
        {users}
      </div>
    )
  }
}

export default AdminPage
