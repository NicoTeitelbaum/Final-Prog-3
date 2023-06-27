import React from 'react';
import trailer from '../../Recursos/SpiderManTrailer.mp4'
function SpiderManTrailer() {
  return (
    <div>
      <video controls>
        <source src={trailer} type="video/mp4" />
      </video>
    </div>
  );
}

export default SpiderManTrailer;