import shareIcon from '../images/icon-share.svg';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import { useState } from 'react';

export const Share = () => {
    const [isToggle, setToggle] = useState(false);

    const handleShare = () => {
        setToggle(!isToggle); // toggle the value of isToggle
    };

    return (
        <div className="share">
            {isToggle && (
                <div className="share-info">
                    <p>SHARE</p>
                    <div className="icon-wrapper">
                        <a href=""><img src={facebookIcon} alt="" /></a>
                        <a href=""><img src={twitterIcon} alt="" /></a>
                        <a href=""><img src={pinterestIcon} alt="" /></a>
                    </div>
                </div>
            )}
            <button className="share-btn" onClick={handleShare}>
                <img src={shareIcon} alt="" />
            </button>
        </div>
    );
};