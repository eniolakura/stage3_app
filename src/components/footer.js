import React from "react";
import frame from '../images/frame.png';
import metabnb from '../images/bottom-metabnb.png';
import ig from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';

function footer() {
    return(
        <footer>
            <div id='top-container'>
                <div id="text_container">
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. Loyal customers get gift cards whzaich are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>
                <a href='google.com' id="button">Learn more</a>
                </div>
                <div id='img_container'>
                <img src={ frame } alt='nft' />
                </div>
            </div>
            <div id="bottom-container">
                <div id='logos'>
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
        </footer>
    )
}

export default footer;