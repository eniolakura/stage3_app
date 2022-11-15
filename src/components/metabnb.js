import React from "react";
import logo from '../images/top-metabnb.png';
import metamask from '../images/metamask.png';
import opensea from '../images/opensea.png';
import mb from '../images/mbtoken.png';
import frame from '../images/frame2.png';
import nft from '../images/NFT.png';



function Metabnb() {
    return (
        <div id="main_container">
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
            <div id='top'>
                <div id='search_bar'>
                    <h1>Rent a <span>Place</span> away from <br /><span>Home</span> in the <span>Metaverse</span></h1>
                    <p>We provide you access to luxury and affordable houses <br/> in the metaverse, get a chance to turn your <br/>imagination to reality at your comfort zone</p>
                    <div id="search">
                        <input type='text' id='search' name='search' placeholder='Search for location' />
                        <a href='google.com' id="search_button">Search</a>
                    </div>
                </div>
                <div id="top-imagees">
                    <img src={ frame } alt='frame'/>
                </div>
            </div>
            <div id='links'>
                <img src={ mb } alt='logo' id="logo"/>
                <img src={ metamask } alt='logo' id="logo"/>
                <img src={ opensea } alt='logo' id="logo"/>
            </div>
            <div id="middle">
                <h1 id='middle_head'>Inspiration for your next adventure</h1>
                <img src={ nft } alt='nfts' id='nfts'/>
            </div>
        </div>
    )
}

export default Metabnb;