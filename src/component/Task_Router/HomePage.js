import React from 'react'
import { useLocation } from 'react-router-dom'

function HomePage() {
    const loca=useLocation();
    const showMyName=loca?.state;
  return (
    <div>
    <div>{showMyName}</div>
    </div>
  )
}

export default HomePage
