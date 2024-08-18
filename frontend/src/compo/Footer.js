import React from 'react';

const Footer = ({ weather }) => (
    <footer className="app-footer">
        <p>latitude {weather?.location.lat} longitude {weather?.location.lon}</p>
        <p>accurate to {weather?.location.localtime}</p>
    </footer>
);

export default Footer;
