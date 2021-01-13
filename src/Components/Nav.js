import React, { Component } from 'react'
import logo from './logo.svg'
import hamburger from './icon-hamburger.svg'
import close from './icon-close.svg'

class Nav extends Component {

    state = {
        navItem: [
            { name: 'About', link: '#about' },
            { name: 'Careers', link: '#careers' },
            { name: 'Events', link: '#events' },
            { name: 'Products', link: '#products' },
            { name: 'Support', link: '#support' },
        ]
    };

    listItems = this.state.navItem.map((navitem, index) =>
        <li className="nav-item active pr-4" key={index}>
            <a className="nav-link" href={navitem.link}>{navitem.name}</a>
            <hr className='ml-4' />
        </li>
    )

    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false
        }
        this.changeImage = this.changeImage.bind(this);
    }

    changeImage() {
        this.setState(state => ({
            isCollapsed: !state.isCollapsed
        }));
    }

    render() {
        return (
            <div>

                <nav className="fixed-top navbar navbar-dark navbar-expand-lg col-12 pt-4 pb-4" style={{ background: this.state.isCollapsed ? '#232323' : 'transparent' }}>

                    <div className="container-fluid col-10">

                        <img className='navbar-brand mr-auto' src={logo} alt='loopstudios' />

                        <button className="navbar-toggler outline-none" type="button" onClick={this.changeImage} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={this.state.isCollapsed ? close : hamburger} alt='nav-icon' />
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-4 p-lg-0 d-flex align-items-left justify-content-center">
                                {this.listItems}
                            </ul>

                        </div>
                    </div>
                </nav>
            </div >
        )
    }
}
export default Nav;
