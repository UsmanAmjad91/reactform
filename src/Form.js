import React from "react";
import App from "./App";
export  default class Form extends React.Component{
constructor(){
    super();
    this.state={
          name:'',
          password:'',
          nameErr:'',
          passwordErr:'',
    }
}
valid(){
    if(this.state.name.length==''){
        this.setState({nameErr:"Please Insert correct username"});
        setTimeout(() => {
            this.setState({nameErr:""});
           }, 5000);
    }else if(!this.state.name.includes("@")){ 
        this.setState({nameErr:"Please Insert correct username @"});
        setTimeout(() => {
            this.setState({nameErr:""});
           }, 5000);
    }
     if(this.state.password.length<="5"){
        this.setState({passwordErr:"Please Insert Password Atleast 5 Characters"});   
        setTimeout(() => {
            this.setState({passwordErr:""});
           }, 5000);
    }
    if((!this.state.name.length=='') && (this.state.name.includes("@")) && (!this.state.password.length<="5"))
    { 
        return true;
    }
    
}
submit(){
    if(this.valid()){
        alert("Form submitted");
    }

}
render(){
    return(
<div>

    <h1>Form Validation</h1>
<input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} />
<p style={{color:"red",fontsize:"14px"}}>{this.state.nameErr}</p>
<input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} />
<p style={{color:"red",fontsize:"14px"}}>{this.state.passwordErr}</p>
<button onClick={()=>this.submit()}> Submit </button>
</div>


    );
}


}
