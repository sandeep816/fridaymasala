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

const CelebrityDetails = () => {
  return (
    <>
      <div className='container mx-auto my-12'>
      <div className='grid md:grid-cols-12 grid-cols-1 '>
       

          <div className="lg:col-span-8">
            <div className='grid grid-cols-12   gap-8'>
              <div className="col-span-4">
                <figure><img src="https://via.placeholder.com/300x408" alt="" /></figure>

              <h4  className='text-xl font-bold my-3'>Personal Info</h4>

              <p className='mb-3'>
              <strong>Known For</strong><br />
              Acting
              </p>

              <p className='mb-3'>
              <strong>Known Credits</strong><br />
              169
              </p>

              <p className='mb-3'>
              <strong>Gender</strong><br />
              Male
              </p>

              <p className='mb-3'>
              <strong>Birthday</strong><br />
              1967-09-09 (54 years old)
              </p>

              <p className='mb-3'>
              <strong>Place of Birth</strong><br />
              Amritsar, Punjab, India
              </p>

              <p className='mb-3'>
              <strong>Also Known As</strong><br />
              Rajiv Hari Om Bhatia Akki अक्षय कुमार
              </p>

              </div>
              <div className="col-span-8 pr-10">
              <h2 className='text-3xl font-bold mb-5'>Akshay Kumar</h2>

                <h3 className='text-xl font-bold mb-2'>Biography</h3>
              The anecdote says that during her pregnancy, DiCaprio's mother often visited various types of exhibitions and museums, claiming that contact with art from the earliest days would make her child an artist. During one of such escapades

              <div className='my-5'>
                <h3 className='text-xl font-bold mb-2'>Known For</h3>

                <Swiper
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
        <Link to=""><figure><img src="https://via.placeholder.com/150x180" alt="" /></figure><h5>Movie Name</h5></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to=""><figure><img src="https://via.placeholder.com/150x180" alt="" /></figure><h5>Movie Name</h5></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to=""><figure><img src="https://via.placeholder.com/150x180" alt="" /></figure><h5>Movie Name</h5></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to=""><figure><img src="https://via.placeholder.com/150x180" alt="" /></figure><h5>Movie Name</h5></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to=""><figure><img src="https://via.placeholder.com/150x180" alt="" /></figure><h5>Movie Name</h5></Link>
        </SwiperSlide>
    </Swiper>
              </div>


              
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
          <div className='w-full h-[500px] bg-green-400'>asdfsdfds</div>
          </div>
      </div>
      </div>
    </>
  )
}

export default CelebrityDetails