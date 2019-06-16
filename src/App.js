import React, { Component } from 'react';
import Donnee from './components/Donnee';
import axios from 'axios';


class App extends Component {
    state ={
        users: []
    }

    componentDidMount(){
        axios.get("http://robotraderserverside.herokuapp.com/predictions?fbclid=IwAR312XNp70RAADKKExlK-1VYqPYsUAwFBrxydeF0qYmmWUNLjxRXUb2bhYQ")
        .then(res =>{
            this.setState({
                users: res.data
            })
            
        })
    }
  
    render() {
        return (
            <div>
              <Donnee users={this.state.users}/>
            

            </div>
        );
    }
}

export default App;