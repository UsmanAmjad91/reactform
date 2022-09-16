import React from "react";
export  default class Register extends React.Component{

   constructor(){
    super()
    this.state={
         username:null,
         email:null,
         password:null,
         confirm:null,
    }
   }
   submit() {
    console.warn(this.state);
   }

   render()
   {
    return(
        <div>
            
            <h1>Register Form</h1>
            <div className="form-group">
                <label  className="form-group">Username</label><br></br>
            <input type="text" name="username" 
            onChange={(e)=>{this.setState({username:e.target.value})}} 
            className="form-control input-fields"/>
            </div>
            <div className="form-group">
            <br></br>
                <label  className="form-group">Email</label>
                <br></br>
            <input type="email" name="email"  onChange={(e)=>{this.setState({email:e.target.value})}}  className="form-control input-fields"/>
            </div>
            <div className="form-group">
            <br></br>
                <label  className="form-group">Password</label>
            <br></br>

            <input type="password" name="password"  onChange={(e)=>{this.setState({password:e.target.value})}}  className="form-control input-fields"/>
            </div>
            <div className="form-group">
            <br></br>
            <br></br>

                <label  className="form-group">Confirm Password</label>
            <br></br>

            <input type="password" name="confirm"  onChange={(e)=>{this.setState({confirm:e.target.value})}}  className="form-control input-fields"/>
            </div>
            <br></br>
            <br></br>

            <button type="submit" onClick={()=>this.submit()} name="submit">Register</button>
            
        </div>
    )
   }

} 