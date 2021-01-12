import React from 'react';
import Nav from './Nav';


const Hero = () => {
    return (
        <div className='hero' style={{
            backgroundSize: 'cover',
            height: '100vh'
        }}>
            <Nav />

            <main className=' d-flex align-items-center justify-content-start mr-auto ' style={{ height: '100vh' }}>
                <div className='col-10 m-auto'>
                    <h1 className='card outline-none p-4 col-12 col-lg-6 col-md-9 text-white'>
                        IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER
                </h1>
                </div>

            </main >
        </div>
    );
};

export default Hero;