import React from 'react'
import {Parallax} from "react-materialize";

const InfoHome = () => {
  return(
    <div>
      <Parallax imageSrc="https://res.cloudinary.com/dultkt54v/image/upload/v1555063705/images_guaurdame/carrusel/vet.png"/>
      <div className="section white">
        <div className="row container">
          <h2 className="header">GuaUrdalo</h2>
          <h5 className="grey-text text-darken-3 lighten-3">
            Nunca había sido tan fácil llevar el control de la Salud de tu Mascota, revisa el historial de tratamientos de tu mascota  </h5>
        </div>
      </div>
      <Parallax imageSrc="https://res.cloudinary.com/dultkt54v/image/upload/v1555064925/images_guaurdame/carrusel/vet_pc.jpg"/>
      <div className="section white">
        <div className="row container">
          <h2 className="header">Comparte </h2>
          <h5 className="grey-text text-darken-3 lighten-3">
            Comparte el expediente de tu mascota con tu veterinario preferido para que pueda hacer un diagnóstico más adecuado con un historial completo </h5>
        </div>
      </div>
     
      <Parallax imageSrc="https://res.cloudinary.com/dultkt54v/image/upload/v1555063705/images_guaurdame/carrusel/pet.png"/>
      <div className="section white">
        <div className="row container">
          <h2 className="header">CaniTips</h2>
          <h5 className="grey-text text-darken-3 lighten-3">
            Eres un poco paranoico, puedes revisar los tips de Salud,Cuidado, Belleza y Alimentación de Veterinarios expertos
            para mejorar la calidad de vida de tu Mascota
          </h5>
        </div>
      </div>
      <Parallax imageSrc="https://res.cloudinary.com/dultkt54v/image/upload/v1555064309/images_guaurdame/carrusel/QR.png"/>
      <div className="section white">
        <div className="row container">
          <h2 className="header">QR Para prevenir la perdida de tu mascota</h2>
          <h5 className="grey-text text-darken-3 lighten-3">
            Te preocupa que tu mascota se pierda y aún no tiene chip?,
            el sistema genera un código QR con los datos principales de
            contacto para que cualquier persona con un teléfono lo pueda escanear y te pueda llamar
          </h5>
        </div>
      </div>
    </div>
  );

}

export default InfoHome