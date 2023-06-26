import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css";

const AnnouncementBar = () => {
  return (
    <div className='announcmentBar col-12 py-2'>
      <div className='container text-center d-flex justify-content-center align-items-center'>
        <div className='m-auto'>
        <Link to="/sale">Thanksgiving Sale</Link> save up to 57% on select products! <Link to="/collections">view on sale products</Link>
        </div>
        <div className='d-block d-md-none'>
          <Link to="/book-now"><button className='ms-2 px-3 py-2 book-now'>Book Now</button></Link>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar
