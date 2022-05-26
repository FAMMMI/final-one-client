import React from 'react';
import img from '../../assets/images/dp.png';

const MyPortfolio = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='m-16 grid lg:text-left text-left '>
                <h2 className='text-accent font-bold'><b>Name:</b> Naimur Rahaman Imthiaz</h2>
                <h2 className='text-accent font-bold'><b>Email:</b> naimfami9@gmail.com</h2>
                <h2 className='text-accent font-bold'><b>Educational Background:</b> BSc in CSE , International Islamic University Chittagong, Bangladesh.(running) <br />
                    HSC from Govt. City College, Chittagong. <br />
                    SSC from Govt. Muslim High School , Chittagong </h2>
                <hr />
                <h2 className='text-accent font-bold'><b>List of skils:</b><br /> # HTMl <br /> # CSS <br />
                    # HTML5 <br />
                    # Node JS <br />
                    # Javascript <br />
                    # MongoDB <br />
                    # React js <br />
                    # React Router
                </h2>
                <hr />
                <h2 className='text-accent font-bold'>My Projects :</h2>
                <p><b>Massive Lift Up:</b><a className='text-secondary' href="">https://assignment-ten-1260c.web.app/</a></p>
                <p><b>My-cro Center:</b><a className='text-secondary' href="">https://my-cro-center-by-fami.netlify.app/</a></p>
                <p><b>Watch Center:</b><a className='text-secondary' href="">https://watch-center-by-fami.netlify.app/</a></p>
            </div>
            <div className='avatar my-20 mx-auto '>
                <div className='w-60 rounded'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;