import React,{Component} from 'react';
import AddCaniTips from "./AddCaniTips";
import  axios from 'axios';
import {Redirect} from "react-router-dom";
import IpDev from "../../Ip";

class CaniTipsVet extends Component{
  state={
    urlG:IpDev.url,
   form:{},
    chips:[
      "salud","alimentación"
    ],
    redirect: false
    
  }
  
  onChangeForm = (e) =>{
   
    let {form}= this.state;
    let name=e.target.name;
    form[name]= e.target.value;
    
    switch (form[name]) {
      case 'Salud':
        form['color']="lime accent-3";
        break;
        case 'Belleza':
        form['color']="pink accent-1";
        break;
        case 'Cuidado':
        form['color']="cyan accent-3";
        break;
        case 'Alimentación':
        form['color']=" yellow darken-1";
        break;
      case 'General':
        form['color']="purple accent-1";
        break;
      default:
        break;
    }
    
    if(e.target.type ==="checkbox"&&e.target.checked ){
      let {form}= this.state;
      let name=e.target.name;
      form[name]= e.target.checked;
      
      // form[name]=!form[name]
      this.setState({form})
      
    }else
    if(e.target.type ==="checkbox"&&e.target.checked===false ){
      let {form}= this.state;
      let name=e.target.name;
      form[name]= e.target.checked;
    
      this.setState({form})
      
    }
    this.setState({form})
   
  }
  
  
  submitTip= (e) => {
    let {form} = this.state;
    e.preventDefault();
    if(form['topic']){
    
    }
    else{
    form['topic']="general"
    }
    
    
    axios.post(`${this.state.urlG}/tips`,form)
      .then((res)=>{
       
        window.Materialize.toast('CaniTip compartido exitosamente ', 1500)
          form={}
        this.setState({form,  redirect: true})
     
      })
      .catch((err)=>{
        console.log('err',err)
      })
    
  }
  
  renderRedirect= ()=>{
    
    if (this.state.redirect) {
      return <Redirect to='/profileVet' />
    }

  }
  
  render() {
    return(
      <div>
        {this.renderRedirect()}
        <AddCaniTips
          data={this.state.chips}
          changeForm={this.onChangeForm}
    
          submitTip={this.submitTip}
        />
      </div>
    
    )
  }
  
}

export default CaniTipsVet