import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const PersonCard = (props) => {
  return (
    <>
        <div className="movie-card bg-white relative">
              <Link to={'/celebrity/'+`${props.title.toLowerCase().replace(/ /g, "-")}`} className="card-product-image relative">
                <span className="overlay"></span>
                <img src={`${props.poster}`} alt="" className='w-full' />

              </Link>
 
              <Link to={'/celebrity/'+`${props.title.toLowerCase().replace(/ /g, "-")}`}  className="p-2 block movie-card-title">
                {props.title}
              </Link>
                
        </div>
    </>
  )
}

export default PersonCard