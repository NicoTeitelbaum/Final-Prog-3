import React from 'react';
import trailer from '../../Recursos/SuperMascotasTrailer.mp4'

function SuperMascotasTrailer() {
  return (
    <div>
      <video controls>
        <source src={trailer} type="video/mp4" />
      </video>
    </div>
  );
}

export default SuperMascotasTrailer;