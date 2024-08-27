import { bgcolor, flexbox } from '@mui/system'
import React from 'react'
// import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";


 const Home=()=> {
    // const navigate = useNavigate();

  return (
    
    <nav class="bg-purple-400 text-white flex justify-between" >
    <div className='logo'>Logo</div>
    <ul class="flex space-x-9">
   <Link to="/Home"> <li >Home</li></Link>
   <Link to="/Compo_1"><li>Component 1</li></Link>
   <Link to="/Compo_2"><li>Component 2</li></Link>

    </ul>
    </nav>
      

    
  )
}

export default Home
