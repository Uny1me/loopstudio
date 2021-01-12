import React from 'react';
import imgdesk from '../desktop/image-interactive.jpg';
import imgmob from '../mobile/image-interactive.jpg';

function Events() {


    return (
        <div id='careers' className='container p-lg-5 mt-5 event d-md-flex flex-column align-items-center justify-content-between justify-content-lg-between flex-lg-row align-items-lg-end col-lg-11 mr-auto ml-auto col-12 col-md-9'>
            <img className='event-img col-lg-7' srcSet={`${imgmob} 1x, ${imgdesk} 2x`} alt="…" />

            <div className='card col-12 col-lg-5 p-lg-5 pt-5 pb-3'>
                <div className='card-body text-lg-left text-center'>
                    <h1 className='text-uppercase pb-3 pb-md-1 font-weight-light col-lg-12 mr-auto ml-auto '>The leader in <br /> interactive  VR</h1>
                    <p className='lead'> Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</p>
                </div>
            </div>
        </div>
    );
}

export default Events;