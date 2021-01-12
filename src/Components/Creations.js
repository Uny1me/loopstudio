import React from 'react';
import img1m from '../mobile/image-deep-earth.jpg'
import img1d from '../desktop/image-deep-earth.jpg'

import img2d from '../desktop/image-night-arcade.jpg'
import img2m from '../mobile/image-night-arcade.jpg'

import img3d from '../desktop/image-soccer-team.jpg'
import img3m from '../mobile/image-soccer-team.jpg'

import img4d from '../desktop/image-grid.jpg'
import img4m from '../mobile/image-grid.jpg'

import img5d from '../desktop/image-from-above.jpg'
import img5m from '../mobile/image-from-above.jpg'

import img6d from '../desktop/image-pocket-borealis.jpg'
import img6m from '../mobile/image-pocket-borealis.jpg'

import img7d from '../desktop/image-curiosity.jpg'
import img7m from '../mobile/image-curiosity.jpg'

import img8d from '../desktop/image-fisheye.jpg'
import img8m from '../mobile/image-fisheye.jpg'


function Creations(state) {

    state = {
        image: [
            { mobile: img1m, desktop: img1d, text: 'Deep', text2: 'Earth' },
            { mobile: img2m, desktop: img2d, text: 'Night', text2: 'arcade' },
            { mobile: img3m, desktop: img3d, text: 'Soccer', text2: 'team VR' },
            { mobile: img4m, desktop: img4d, text: 'the', text2: 'grid' },
            { mobile: img5m, desktop: img5d, text: 'from up', text2: 'above vr' },
            { mobile: img6m, desktop: img6d, text: 'pocket', text2: 'borealis' },
            { mobile: img7m, desktop: img7d, text: 'the', text2: 'curiosity' },
            { mobile: img8m, desktop: img8d, text: 'make it', text2: 'fisheye' },
        ]
    }


    return (
        <div className='creation col-10 text-md-center mr-auto ml-auto d-flex flex-column' id='events'>

            <div className=' pt-5 pb-5 mt-5 mb-5 creation-header d-flex align-items-center justify-content-between col-10 col-md-7 col-lg-12 mr-auto ml-auto '>
                <h1 className='text-uppercase font-weight-lighter'> Our creations</h1>
                <button className='btn btn-outline-dark d-none d-lg-block pl-5 pt-2 pb-2 pr-5'>SEE ALL</button>
            </div>

            <div className='creation-items d-flex align-items-center justify-content-between flex-column flex-lg-row flex-wrap mr-auto ml-auto'>
                {state.image.map((images) =>
                    <div className='item col-lg-3 pb-5'>

                        <img src={images.desktop} className='d-lg-block d-none col-md-12 col-3' alt='...' />
                        <img src={images.mobile} className='d-lg-none d-block' alt='...' />

                        <h2 className='mb-4 text-light font-weight-lighter text-left text-uppercase'>{images.text} <br /> {images.text2} </h2>
                    </div>
                )}
            </div>
            <button className='btn btn-outline-dark d-block d-lg-none pt-2 pb-2 col-7 mr-auto ml-auto'>SEE ALL</button>
        </div>
    );
}

export default Creations;