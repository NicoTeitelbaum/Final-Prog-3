import React from 'react';
import trailer from '../../Recursos/BlackAdamTrailer.mp4'
function BlackTrailer() {
  return (
    <div>
      <video controls>
        <source src={trailer} type="video/mp4" />
      </video>
    </div>
  );
}

export default BlackTrailer;