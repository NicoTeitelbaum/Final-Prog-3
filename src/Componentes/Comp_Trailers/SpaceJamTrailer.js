import React from 'react';
import trailer from '../../Recursos/SpaceJamTrailer.mp4'

function SpaceJamTrailer() {
  return (
    <div>
      <video controls>
        <source src={trailer} type="video/mp4" />
      </video>
    </div>
  );
}

export default SpaceJamTrailer;