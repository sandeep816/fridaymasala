import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

//import Poster from '../assets/images/poster/baahubali.jpg'
 

const MovieCard = (props) => {
  return (
    <>
        <div className="movie-card bg-white relative">
              <Link to="#" className='xplay'><FontAwesomeIcon icon={faPlay} /></Link>
              <Link to={'/movies/'+`${props.title.toLowerCase().replace(/ /g, "-")}`} className="card-product-image relative">
                <span className="overlay"></span>
                <img src={`${props.poster}`} alt="" className='w-full' />
                <span className="card-product-label absolute top-4 right-4 bg-white rounded-full text-coolGray-600 font-normal text-sm flex justify-center items-center py-px px-3">{props.rating}</span>
              </Link>
 
              <Link to={'/movies/'+`${props.title.toLowerCase().replace(/ /g, "-")}`}  className="p-2 block movie-card-title">
                {props.title}
              </Link>
                
        </div>
    </>
  )
}

export default MovieCard