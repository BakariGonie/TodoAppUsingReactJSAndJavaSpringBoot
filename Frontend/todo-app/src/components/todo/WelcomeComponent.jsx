
import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { retrieveHelloWorldVariable } from '../api/HelloWorldApiService';
import { useAuth } from '../security/AuthContext';

export default function WelcomeComponent() {
  const { username } = useParams();
  const [message, setMessage]= useState();
  const authContext=useAuth()


  function callHelloWorldRestApi() {
   // retrieveHelloWorld()
   retrieveHelloWorldVariable(username, authContext.token)
    .then((response)=>successfulResponse(response))
    .catch((error)=>errorResponse(error))
    .finally(()=>console.log("cleanup"))
  }
  function successfulResponse(response){
    //console.log(response)
    setMessage(response.data.message)
  }

  function errorResponse(error){
    console.log("error")
  }



  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      Your Todos - <Link to="/todos">Go here</Link>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
          Call Hello World
        </button>
      </div>
      <div className='text-info'>
        {message}
      </div>
    </div>
  );
}
