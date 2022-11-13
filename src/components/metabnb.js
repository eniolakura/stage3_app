import React from "react";
import logo from '../images/top-metabnb.png';
import metamask from '../images/metamask.png';
import opensea from '../images/opensea.png';
import mb from '../images/mbtoken.png';






function Metabnb() {
    return (
        <div>
            <div id='nav'>
                <nav>
                    <img src={ logo } alt='logo' />
                    <ul>
                        <li>Home</li>
                        <li>Place to stay</li>
                        <li>NFTs</li>
                        <li>Community</li>
                        <a href="google.com" id='top-button'>Connect wallet</a>
                    </ul>
                </nav>
            </div>
            <div id='top'>
                <div id='search_bar'>
                    <h1>Rent a Place away from Home in the Metaverse</h1>
                    <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div id="search">
                        <input type='text' id='search' name='search' placeholder='Search for location' />
                        <a href='google.com'>Search</a>
                    </div>
                </div>
                <div id="top-imagees">

                </div>
            </div>
            <div id='links'>
                <img src={ mb } alt='logo'/>
                <img src={ metamask } alt='logo'/>
                <img src={ opensea } alt='logo'/>
            </div>
        </div>
    )
}

export default Metabnb;