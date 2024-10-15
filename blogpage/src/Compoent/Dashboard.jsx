import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return<>
      <div id="content">
        <div className="container-fluid">
                <Link className="link" to='/all'>All</Link>
                <Link className="link" to='/all-1'>Full Stack Dvelopment</Link>
                <Link className="link" to='/all-2'>Data Science</Link>
                <Link className='link' to='/all-3'>Cybersecurity</Link>
                <Link className='link' to='/all-4'>Career</Link>
          </div>
        <hr/>
      </div>
  </>
  
}

export default Dashboard
