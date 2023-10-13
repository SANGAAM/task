import React, { useState } from 'react' 

import Student from '../student-details/student'

const Home = () => {
    const [input,setInput]=useState('Sangam');
  return (
    <div>
        
      <h1>Home page</h1>
      <form>
        <label>
         Name:{input} 
        </label>
      </form>
      <Student name={input}/>
    </div>
  )
}

export default Home;
