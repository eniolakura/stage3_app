import React from "react";
import extra from '../images/extra.png'
import location from '../images/location.png'
import logo from '../images/top-metabnb.png'
import metabnb from '../images/bottom-metabnb.png';
import ig from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';

function NFT() {
    return (
        <>
            <div>
                <div id='nav'>
                    <nav>
                        <ul>
                            <li><img src={ logo } alt='logo' /></li>
                            <li>Home</li>
                            <li>Place to stay</li>
                            <li>NFTs</li>
                            <li>Community</li>
                            <a href="google.com" id='top-button'>Connect wallet</a>
                        </ul>
                    </nav>
                </div>
                <div id="options">
                    <h3>Restaurant</h3>
                    <h3>Cottage</h3>
                    <h3>Castle</h3>
                    <h3>Fantasy City</h3>
                    <h3>Beach</h3>
                    <h3>Cabins</h3>
                    <h3>Off-grid</h3>
                    <h3>Farm</h3>
                    <img src={ location } alt='location' />
                </div>
                <div >
                    <img src={ extra } alt='extra' id="body" />
                </div>
                <div id="bottom-container">
                <div id='logo'>
                    <img src={ metabnb } alt='logo'/>
                    <div id="socials">
                        <img src={ facebook } alt='logo' />
                        <img src={ ig } alt='logo' />
                        <img src={ twitter } alt='logo' />
                    </div>
                </div>
                <div id="addition">
                    <ul id='list'>
                        <li>
                            <h3>Community</h3>
                        </li>
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                    <ul id='list'>
                        <li>
                            <h3>Places</h3>
                        </li>
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                    <ul id='list'>
                        <li>
                            <h3>About us</h3>
                        </li>
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                </div>
            </div>
        </>

    )
    }

export default NFT;