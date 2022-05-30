import React from 'react';
import images from '../assets/images/colmena.jpg';

const Card = () => {
  return (
    <main className="container">
      <img
        className="block"
        // eslint-disable-next-line global-require
        src={images}
        alt="imagen de capture"
      />
    </main>
  );
};

export default Card;
