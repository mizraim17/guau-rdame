import React, {Component} from 'react';
import axios from 'axios'
import {Button} from 'react-materialize'
import {Link} from "react-router-dom";

class User extends Component{
  state={
    
    users:[]
  }
  componentDidMount() {
   
    axios.get('http://localhost:3005/api/user')
      .then((result)=>{
        // console.log(result)
        this.setState({users:result.data})
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  
  render() {
    const {users} = this.state;
    return(
      <div>
        <h1>Lista de Usuarios</h1>
        {
          users.map((el,i)=>{
           return(
  
             <div key={i}>
              
               <p>{el.email}</p>
               {  el.role}
             </div>
           
           )
          })
        }
        <Link to="/profile">
          <Button   >
            Profile
          </Button>
        </Link>  <Link to="/register/user">
          <Button   >
            Regresar
          </Button>
        </Link>
      
      </div>
    );
  }
}


export default User