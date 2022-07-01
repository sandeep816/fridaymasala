import React from 'react'
import MovieCard from '../../components/MovieCard'

const Movies = () => {
  return (
    <>

<div className="hero-area pt-10 2xl:pt-20 pb-14 2xl:pb-24 relative">
                <div className="container mx-auto relative z-20">
                    <div className="section-title text-center">
                        <h1 className="leading-tight text-4xl lg:text-6xl font-bold mb-4">Movies Page</h1>
                    </div>
                </div>
            </div>

      <div className="relative px-10">
          <div className="container m-auto">
              <div className="item-infinite grid md:grid-cols-12 grid-cols-1 gap-30">
                <div className="lg:col-span-8 md:col-span-7">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">

                    <MovieCard
                    title="Shamshera"
                    rating="9.1"
                    poster="/assets/images/poster/shamshera.jpg"
                    />
                   

                    <MovieCard
                    title="Baahubali One Two Three"
                    rating="8.1"
                    poster="/src/assets/images/poster/baahubali.jpg"
                    />

                    <MovieCard
                    title="Commando"
                    rating="7"
                    poster="/src/assets/images/poster/commando.jpg"
                    />

                    <MovieCard
                    title="Maatr"
                    rating="8.1"
                    poster="/src/assets/images/poster/maatr.jpg"
                    />

                    <MovieCard
                    title="badrinath"
                    rating="8.1"
                    poster="/src/assets/images/poster/begum-jaan.jpg"
                    />

                    <MovieCard
                    title="Rangoon"
                    rating="8.1"
                    poster="/src/assets/images/poster/rangoon.jpg"
                    />
                    
                    <MovieCard
                    title="Phillauri"
                    rating="8.1"
                    poster="/src/assets/images/poster/phillauri.jpg"
                    />

                    <MovieCard
                    title="noor"
                    rating="7"
                    poster="/src/assets/images/poster/noor.jpg"
                    />

                    <MovieCard
                    title="Badrinath ki dulhania"
                    rating="8.1"
                    poster="/src/assets/images/poster/badrinath-ki-dulhania.jpg"
                    />

                    <MovieCard
                    title="machine"
                    rating="8.1"
                    poster="/src/assets/images/poster/machine.jpg"
                    />

                    <MovieCard
                    title="Naam Shabana"
                    rating="8.1"
                    poster="/src/assets/images/poster/naam-shabana.jpg"
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

export default Movies