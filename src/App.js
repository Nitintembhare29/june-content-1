import React, {useState} from 'react';
import './App.css';

function App() {

  const [formValues, setFormValues] = useState({name:"", email:"", password:"", confirmPass:""})

  function formSubmit(event){
                event.preventDefault();
                let errmsg = document.querySelector("#err-msg"); 

                if(formValues.name === "" || formValues.email ==="" || formValues.password ==="" || formValues.confirmPass ===""){    
                  errmsg.innerText  = "Error : All the fields are mandatory";
                  errmsg.style.color = "#FF4F4F";
                  errmsg.style.display = "inline-block";
                  return;
                }
             
                if(formValues.password !== formValues.confirmPass){
                 errmsg.innerText  = "Password not matching";
                 errmsg.style.color = "#FF4F4F";
                 errmsg.style.display = "inline-block";
                 return;
                }
              
                errmsg.innerText  = "Successfully Signed Up!";
                errmsg.style.color = "#7ECD71";
                errmsg.style.display = "inline-block";   
             
          }

  return (
    <div class="form-cont">
    
    <form>
      <input type="text" placeholder="Full Name" value={formValues.name} 
        onInput={(e)=>setFormValues({...formValues, name:e.target.value})}
      />
      <input type="email" placeholder="Email" value={formValues.email} 
        onInput={(e)=>setFormValues({...formValues, email:e.target.value})}
      />
      <input type="password" placeholder="Password" value={formValues.password} 
        onInput={(e)=>setFormValues({...formValues, password:e.target.value})}
      />
      <input type="password" placeholder="Confirm Password" value={formValues.confirmPass} 
        onInput={(e)=>setFormValues({...formValues, confirmPass:e.target.value})}
      />
      
      <span id="err-msg"></span>
      <button type="submit" id="sign-up" onClick={formSubmit}>Signup</button>
    </form>
  </div>
   
  );
}

export default App;
