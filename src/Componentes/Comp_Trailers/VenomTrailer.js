import React from 'react';
import trailer from '../../Recursos/VenomTrailer.mp4'

function VenomTrailer() {
  return (
    <div>
      <video controls>
        <source src={trailer} type="video/mp4" />
      </video>
    </div>
  );
}

export default VenomTrailer;