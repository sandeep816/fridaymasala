import React from 'react';

const MovieCard = ({poster, title, date, rating}) => {
    return (
        <>
            <div className="card-product-style bg-white rounded transition duration-500 hover:shadow-lg">
                <div className="card-product-image relative">
                <img className="w-full rounded" src="https://dummyimage.com/300x400" alt=""/>
                    <span className="card-product-label absolute top-4 right-4 bg-white rounded-full text-coolGray-600 font-normal text-sm flex justify-center items-center py-px px-3">{rating}</span>
                </div>
                <div className="card-product-content px-4 py-6">
                    <h2 className="text-coolGray-900 text-lg font-bold transition duration-500 hover:text-teal-400 mb-2"><a href="">{title}</a></h2>
                </div>
            </div>
        </>
    );
};

export default MovieCard;