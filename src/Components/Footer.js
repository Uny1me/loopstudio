import React from 'react';
import logo from './logo.svg'
import facebook from './icon-facebook.svg'
import pinterest from './icon-pinterest.svg'
import instagram from './icon-instagram.svg'
import twitter from './icon-twitter.svg'
function Footer(state) {

    state = {
        navItem: [
            { name: 'About', link: '#about' },
            { name: 'Careers', link: '#careers' },
            { name: 'Events', link: '#events' },
            { name: 'Products', link: '#products' },
            { name: 'Support', link: '#support' },
        ]
    };

    const listItems = state.navItem.map((navitem, index) =>
        <li className="nav-item active pr-2" key={index}>
            <a className="nav-link text-white" href={navitem.link}>{navitem.name}</a>
            <hr className='ml-4' />
        </li>
    )
    return (
        <div id='support' className='footer mt-5 mb-0 d-flex flex-lg-row flex-column flex-wrap p-5 align-items-center justify-content-center text-lg-left text-center'>

            <div class="order-lg-1 pl-5  col-6 pb-4">
                <img className='logo' src={logo} alt='...' />
            </div>

            <ul className='order-lg-3 pl-4 d-flex flex-column flex-lg-row col-6' style={{ listStyleType: 'none' }}>
                {listItems}
            </ul>

            <div className='order-lg-2 pl-4  icons align-items-center col-6 d-flex '>
                <li>
                    <img src={facebook} alt='' className='mr-5' />
                    <hr className='ml-4 mt-3' />
                </li>
                <li>
                    <img src={twitter} alt='' className='mr-5' />

                    <hr className='ml-4 mt-3' />
                </li>               <li>
                    <img src={pinterest} alt='' className='mr-5' />
                    <hr className='ml-4 mt-3' />
                </li>
                <li>
                    <img src={instagram} alt='' className='mr-5' />
                    <hr className='ml-4 mt-3' />
                </li>
            </div>

            <footer className='mt-2 pl-5 order-lg-4 col-lg-6 col-sm-12   text-white'>
                © 2021 Loopstudios. All rights reserved.
                </footer>
        </div>

    );
}

export default Footer;