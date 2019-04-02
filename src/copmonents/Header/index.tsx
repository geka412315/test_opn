import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header className="Header">
            <div className="level_one">
                <a href="/">
                    <img className='logo' src={require("../../img/logo.png")} alt="photo"/>
                </a>
                <span className='important_text'>The Best World Packaging Exchange Marketplace</span>
                <div id='first'  className="three">
                    <span className='company'>Your company:</span>
                    <span className='name_company'>Сhesapeake Energy Corporation</span>
                </div>
                <div className="three">
                    <span className='balanceText'>balance:</span>
                    <span className='numbers'>9,323,323 OPK</span>
                </div>
                <div className="three">
                    <span className='log'>log out</span>
                    <a href="/">
                        <img className='log_out' src={require("../../img/cirrow.png")} alt="photo"/>
                    </a>
                </div>
            </div>
            <div className="buttons_menu">
                <div className="first menu__item">
                    <button id="MenuItem" className="headerMenuItem">
                        MAIN
                    </button>
                </div>
                <div className="menu__item">
                    <button id="MenuItem" className="headerMenuItem">
                        COMPANY
                    </button>
                </div>
                <div className="menu__item">
                    <button id="MenuItem" className="headerMenuItem">
                        PRODUCTS
                    </button>
                </div>
                <div className="menu__item">
                    <button id="MenuItem" className="headerMenuItem">
                        LOGISTIC
                    </button>
                </div>
                <div className="menu__item">
                    <button id="MenuItem" className="headerMenuItem">
                        CONTACTS
                    </button>
                </div>
                <div className="search_block">
                    <input type="text" className='search_input'/>
                    <a className="search_img_a" href="/">
                        <img className='search_img' src={require("../../img/search.png")} alt="photo"/>
                    </a>
                </div>
            </div>
            <div className="news_line">
                <div className="three">
                    <span className='opn'>OPN</span>
                    <span className='news'>NEWS</span>
                </div>
                <div className="blue_news">
                    <span className='news_item'>30 | 01 | 19 OPN starts a new design</span>
                    <span className='news_item'>30 | 01 | 19 Meet new CEO</span>
                    <span className='news_item'>30 | 01 | 19 OPN starts a new design</span>
                    <span className='news_item'>30 | 01 | 19 Meet new CEO</span>
                </div>
                <div className="links">
                    <div id='link_block' className="news_link">
                        <img id='img_links' className='network_img' src={require("../../img/print.png")} alt="photo"/>
                        <span id="text_link" className='sub_news'>Subscribe for NEWS</span>
                    </div>

                    <div id='link_block' className="print_link">
                        <img id='img_links' className='network_img' src={require("../../img/print.png")} alt="photo"/>
                        <span id="text_link" className='print_vers'>Print version</span>
                    </div>
                </div>
            </div>

            </header>
        )
    }
}



export default Header;