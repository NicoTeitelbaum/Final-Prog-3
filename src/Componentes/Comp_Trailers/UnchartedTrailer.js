import React from 'react';
import trailer from '../../Recursos/UnchartedTrailer.mp4'

function UnchartedTrailer() {
  return (
    <div>
      <video controls>
        <source src={trailer} type="video/mp4" />
      </video>
    </div>
  );
}

export default UnchartedTrailer;