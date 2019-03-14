import React from 'react';

const GenerateQR= (props) => {
  return(
    <div className="App">
      {
        props.imageQr !== ''
          ? <div>
            <h4>Código QR</h4> <img src={props.imageQr} alt="IMAGHE"/>
          </div>
          : <p>No has llenado los datos de tu mascota para poder generar el código</p>
      }
    </div>
  );
}

export default GenerateQR;