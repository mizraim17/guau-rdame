import React,{Component} from 'react';
import AddCaniTips from "./AddCaniTips";
import  axios from 'axios';

class CaniTipsVet extends Component{
  state={
    form:{
      uno:false,
      dos:false,
      tres:false
    },
    chips:[
      "salud","alimentación"
    ]
    
  }
  
  onChangeForm = (e) =>{
    // e.preventDefault()
    console.log('checkes======',e.target.checked )
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
    }
    
    if(e.target.type ==="checkbox"&&e.target.checked ){
      let {form}= this.state;
      let name=e.target.name;
      form[name]= e.target.checked;
      
      // form[name]=!form[name]
      this.setState({form})
      console.log('si',form)
    }else
    if(e.target.type ==="checkbox"&&e.target.checked===false ){
      let {form}= this.state;
      let name=e.target.name;
      form[name]= e.target.checked;
    
      this.setState({form})
      console.log('no',form)
    }
    this.setState({form})
   
  }
  
  
  
  submitTip= (e) => {
    let {form} = this.state;
    e.preventDefault();
    axios.post('http://localhost:3005/api/tips',form)
      .then((res)=>{
      // this.history.push('')
      })
      .catch((err)=>{
        console.log('err',err)
      })
  }
  render() {
    return(
      <AddCaniTips
        data={this.state.chips}
        changeForm={this.onChangeForm}
       
        submitTip={this.submitTip}
      />
    )
  }
  
}

export default CaniTipsVet