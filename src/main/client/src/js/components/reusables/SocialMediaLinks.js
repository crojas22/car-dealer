import React from 'react';
import FaYoutubeSquare from 'react-icons/lib/fa/youtube-square';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaInstagram from 'react-icons/lib/fa/instagram';

const SocialMediaLinks = ({size}) => (
    <div className="social-media">
        <FaYoutubeSquare size={size}/>
        <FaFacebookSquare size={size}/>
        <FaInstagram size={size}/>
    </div>
);

export default SocialMediaLinks;