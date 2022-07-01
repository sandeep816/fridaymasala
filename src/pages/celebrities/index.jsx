import React from 'react'
import PersonCard from '../../components/PersonCard'


const Celebrities = () => {
  return (
    <>
        <div className="hero-area pt-10 2xl:pt-20 pb-14 2xl:pb-24 relative">
            <div className="container mx-auto relative z-20">
                <div className="section-title text-center">
                    <h1 className="leading-tight text-4xl lg:text-6xl font-bold mb-4">Celebrities</h1>
                </div>
            </div>
        </div>


        <div className="relative px-10">
          <div className="container m-auto">
              <div className="item-infinite grid md:grid-cols-12 grid-cols-1 gap-30">
                <div className="lg:col-span-8 md:col-span-7">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">

                  <PersonCard
                  title="Akshay Kumar"
                  poster="https://via.placeholder.com/232x338"
                  />

                  <PersonCard
                  title="Ranbir Kapoor"
                  poster="https://via.placeholder.com/232x338"
                  />

                  <PersonCard
                  title="Shahid Kapoor"
                  poster="https://via.placeholder.com/232x338"
                  />

                  <PersonCard
                  title="Alia Bhatt"
                  poster="https://via.placeholder.com/232x338"
                  />

                  <PersonCard
                  title="Hrithik Roshan"
                  poster="https://via.placeholder.com/232x338"
                  />

                  <PersonCard
                  title="Katrina Kaif"
                  poster="https://via.placeholder.com/232x338"
                  />

                  <PersonCard
                  title="Anushka Sharma"
                  poster="https://via.placeholder.com/232x338"
                  />

                  <PersonCard
                  title="Amitabh Bachchan"
                  poster="https://via.placeholder.com/232x338"
                  />
                   

                     
                    </div>


                </div>
                {/*  */}
                <div className="lg:col-span-4 md:col-span-5 pl-10">
                <img src="https://via.placeholder.com/480x480" alt="" />
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Celebrities