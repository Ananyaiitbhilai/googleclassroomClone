import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import './App.css'

import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut , AmplifyGreetings, AmplifyFederatedSignIn} from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

const App = () => {
  return (
    <AmplifyAuthenticator>
      	{/*<AmplifyFederatedSignIn provider = "Google"/> */}
	<AmplifySignUp
        slot="sign-up"
        formFields={[
          {
            type: "username",
            label: "Username",
            placeholder: "Enter Username",
            inputProps: { required: true, autocomplete: "username" }
            
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Enter Password",
            inputProps: { required: true, autocomplete: "password" }
          }
        ]} 
      />
      <AmplifySignIn 
      
        slot="sign-in"
        formFields = {[

          {
            type:'username',
            label:'Email Address',
            placeholder:'Enter Email Address',
            inputProps: { required: true, autocomplete: "username" }
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Enter Password",
            inputProps: { required: true, autocomplete: "password" }
          }

        ]
        } 
      
      />
      {/* <AmplifyGreetings/> */}
      <div className="App">
       <header className="App-header">
        <h2>LOLOL</h2>
        <AmplifySignOut />
       </header>
     </div>
    
    </AmplifyAuthenticator>
    
  );
};

export default App;
