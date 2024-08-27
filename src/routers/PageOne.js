import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function PageOne() {
    const location=useLocation()
    const navigate=useNavigate()
    console.log("the location of the component",location.state);
  return (
    <div>
      <div>First Component</div>
      <button
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginLeft: "10%",
          marginTop: "10px",
        }}
        onClick={() => {
            navigate(-1)
        }}
      >
        Home
      </button>
    </div>
  )
}

export default PageOne