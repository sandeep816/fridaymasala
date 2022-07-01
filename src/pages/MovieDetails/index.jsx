import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import Poster from '../../assets/images/poster/baahubali.jpg'
import slider1 from '../../assets/images/cast/ranveer-singh.jpg'
import slider2 from '../../assets/images/cast/Deepika-Padukon.jpg'
import slider3 from '../../assets/images/cast/shahid-kapoor.jpg'
import slider4 from '../../assets/images/cast/Aditi-Rao-Hydari.jpg'
import slider5 from '../../assets/images/cast/Padmavati-Rao.jpg'

const MovieDetails = () => {
  return (
    <>
      <main>
      <div className="container m-auto">
        <div className="md:flex">
            <div className="w-4/5 p-4">
                <h1 className='text-3xl font-bold my-3'>RRR (2022)</h1>
                
                <div className="infos mb-4">
                  <span><FontAwesomeIcon icon={faCalendarDays} /> 24 March 2022</span>
                  <span><FontAwesomeIcon icon={faClock} /> 2 hrs 43 mins</span>
                </div>
                <div className="genre mb-3">
                  <span className='text-xs rounded-full border py-1 px-3 mr-2'>Action</span>
                  <span className='text-xs rounded-full border py-1 px-3'>Drama</span>
                </div>

                <dl className="flex flex-wrap">
                  <dt className="w-1/6 mb-3">Languages</dt>
                  <dd className="w-5/6">
                    <Link to=""><span>हिंदी</span></Link>,
                    <Link to=""><span>தமிழ்</span></Link>,
                    <Link to=""><span>தெலுகு</span></Link>
                  </dd>

                  <dt className="w-1/6 mb-3">Producers</dt>
                  <dd className="w-5/6">Sanjay Leela Bhansali</dd>

                  <dt className="w-1/6 mb-3">Director</dt>
                  <dd className="w-5/6">S. S. Rajamouli</dd>

                  <dt className="w-1/6">Writers</dt>
                  <dd className="w-5/6">S. S. Rajamouli</dd>

                  
                </dl>

            </div>
            <div className="w-1/5 p-4">
              <img src={`${Poster}`} alt="" />
            </div>
        </div>
      </div>


       <div className="container m-auto mt-1 cast">
        <div className="md:flex">
          <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">

          <div className="mb-12">
          <h2 className='text-2xl font-medium mb-5'>Overview</h2>
          <p className='mb-5'>A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.</p>
          </div> 

          <div className="mb-12">
          <h2 className='text-2xl font-medium mb-5'>Casting</h2>
          <Swiper
      spaceBetween={10}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Link to=""><figure><img src={slider1} alt="" /></figure><h5>Shahid Kapoor</h5><span class="role">Maharawal Ratan Singh</span></Link></SwiperSlide>
      <SwiperSlide><Link to=""><figure><img src={slider2} alt="" /></figure><h5>Shahid Kapoor</h5><span class="role">Maharawal Ratan Singh</span></Link></SwiperSlide>
      <SwiperSlide><Link to=""><figure><img src={slider3} alt="" /></figure><h5>Shahid Kapoor</h5><span class="role">Maharawal Ratan Singh</span></Link></SwiperSlide>
      <SwiperSlide><Link to=""><figure><img src={slider4} alt="" /></figure><h5>Shahid Kapoor</h5><span class="role">Maharawal Ratan Singh</span></Link></SwiperSlide>
      <SwiperSlide><Link to=""><figure><img src={slider5} alt="" /></figure><h5>Shahid Kapoor</h5><span class="role">Maharawal Ratan Singh</span></Link></SwiperSlide>

      <SwiperSlide><Link to=""><figure><img src={slider1} alt="" /></figure><h5>Shahid Kapoor</h5><span class="role">Maharawal Ratan Singh</span></Link></SwiperSlide>
      <SwiperSlide><Link to=""><figure><img src={slider2} alt="" /></figure><h5>Shahid Kapoor</h5><span class="role">Maharawal Ratan Singh</span></Link></SwiperSlide>
      <SwiperSlide><Link to=""><figure><img src={slider3} alt="" /></figure><h5>Shahid Kapoor</h5><span class="role">Maharawal Ratan Singh</span></Link></SwiperSlide>
      <SwiperSlide><Link to=""><figure><img src={slider4} alt="" /></figure><h5>Shahid Kapoor</h5><span class="role">Maharawal Ratan Singh</span></Link></SwiperSlide>
      <SwiperSlide><Link to=""><figure><img src={slider5} alt="" /></figure><h5>Shahid Kapoor</h5><span class="role">Maharawal Ratan Singh</span></Link></SwiperSlide>
       

 
    </Swiper>
          </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
              <div className='w-full h-[600px] bg-red-900'></div>
          </div>
        </div>
        
       </div>
       </main>
    </>
  )
}

export default MovieDetails