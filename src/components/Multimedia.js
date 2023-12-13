import React from 'react';
import YouTube from 'react-youtube';

const Multimedia = () => {
  const videoId = '81pFXMoB3Qo'; // Extrae el ID del enlace de YouTube

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <h2> EVENTO DE CENTRON DE CULTURAL </h2>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={(event) => {
          
        }}
      />
    </div>
  );
};

export default Multimedia;

