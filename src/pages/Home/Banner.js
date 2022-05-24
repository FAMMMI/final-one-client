import React from 'react';

const Banner = () => {
    return (
        <div className='m-10'>
            <div class="carousel w-full">
                <div id="slide2" class="carousel-item relative w-full">
                    <img className='w-full ' src="https://bikeadvice.in/wp-content/uploads/2014/08/Royal-Enfield-Continental-GT-Pics-paioli-shock-absorber-1280x720.jpg" ></img> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://static.toiimg.com/thumb/msid-76975106,width-1200,height-900,resizemode-4/.jpg" class="w-full "></img> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://www.aptyres.com/catalog/view/theme/default/image/motorbike-tyres.jpg" class="w-full"></img> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;