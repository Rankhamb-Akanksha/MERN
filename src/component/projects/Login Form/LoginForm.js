// import React from "react";
// import { useState } from "react";

// export default function LoginForm() {
//   const [islogin, setIsLogin] = useState(true);

//   return (
//     <div className="container">
//       <div className="form-container">
//         <div className="form-toggle">
//           <button
//             className={islogin ? 'active' : ""}
//             onClick={() => setIsLogin(true)}
//           >
//             Login
//           </button>

//           <button
//             className={!islogin ? 'active' : ""}
//             onclick={() => setIsLogin(false)}
//           >
//             Sign Up
//           </button>
//         </div>
//         {islogin ? <>
//           <div className="form">
//           <h2>Login Form</h2>
//           <input type="email" placeholder="email" />
//           <input type="password" placeholder="password" />
//           <a href="#">Forget password ?</a>
//           <button>Login</button>
//           <p>Not a member? <a href="sign up form" onclick={()=>setIsLogin(false)}>Sign Up now</a></p>
//           </div>

          
//           </>:<>
          
//           </>""}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react'

function LoginForm() {
    const [isLogin,setIsLogin]=useState(true);

    
  return (
    <>
    <div className='container'>
        <div className='form-Container'>
            <div className='form-toggle'>
                <button className={isLogin?'active':""} onClick={()=>setIsLogin(true)}>Login</button>
                <button className={!isLogin?'active':""} onClick={()=>setIsLogin(false)}>Sign-Up </button>
            </div>
            {isLogin ? <>
                <div className='form'>
                    <h2>Login Form</h2>
                    <input placeholder='Email Address' type='email'/>
                    <input placeholder='Password' type='password'/>
                    <a href='#'>Forgot Password?</a>
                    <button>Login</button>
                    <p>Not a member? <a href='Sign-Up-Form' onClick={()=>setIsLogin(false)}>Signup Now</a></p>
                </div>
            </>:<>
                <div className='form'>
                    <h2>Signup</h2>
                    <input placeholder='Email Address' type='email'/>
                    <input placeholder='Password' type='password'/>
                    <input placeholder='Confirm Password' type='password'/>
                    <button>Sign Up</button>
                </div>
            </>}
        </div>
    </div>

    </>
  )
}

export default LoginForm

