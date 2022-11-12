import React from "react";
import img7 from '../images/image 7.png';
import img8 from '../images/image 8.png';
import img9 from '../images/images 9.png';

function footer() {
    return(
        <footer>
            <div id='top-container'>
                <div id="text_container">
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. Loyal customers get gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>
                <a id="button">Learn more</a>
                </div>
                <div id='img_container'>
                <img src={ img7 } alt='image' />
                <img src={ img8 } alt='image' />
                <img src={ img9 } alt='image' />
                </div>
            </div>
            <div id="bottom-contaier">
                <div id='logos'></div>
                <div id="addition">
                    <ul>
                        <li>
                            <h3>Community</h3>
                        </li>
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Places</h3>
                        </li>
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                    <ul>
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