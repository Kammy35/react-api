import React from 'react';
import axios from 'axios';
import {Users} from './components/Users'
import './App.css';

class App extends React.Component {

state = {
  users: [],
  loading: false
};

async componentDidMount() {
  this.setState({
    loading: true
  });

  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  // console.log(response.data);

  this.setState({
    users: response.data,
    loading: false
  });
}



  render(){
    const allUsers = this.state.users.map( (object) => {
      return <h1 key={object.id}>My Name is {object.name} and im from {object.address.city}</h1>
    })


    return(
      <div className="main">
      <h1>React API's</h1>
        <Users data={allUsers} loading={this.state.loading} />
      </div>

    );
  }
}



export default App;
