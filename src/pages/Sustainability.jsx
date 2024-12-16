import React from 'react';
import '../styles/Sustainability.css';

function Sustainability() {
  return (
    <div className="sustainability">
      <h1 className="sustainability-title">Sostenibilidad</h1>
      <div className="sustainability-content">
        <img
          src="/imangenes/sostenibilidadd.jpg"
          alt="Sostenibilidad"
          className="sustainability-image"
        />
        <p className="sustainability-text">
          Nuestra empresa ha sido fundada con el propósito de fabricar un cuero duradero y responsable con el entorno que nos rodea ambiental y socialmente. Creemos firmemente en la importancia de cuidar nuestro entorno. Por eso, hemos implementado prácticas innovadoras para minimizar el impacto ambiental de nuestra producción. Una de nuestras principales iniciativas es la recolección y reutilización de agua de lluvia. Almacenar grandes volúmenes de agua de las lluvias nos permite reducir el consumo de agua dulce en el proceso de curtido, un paso fundamental en la fabricación del cuero.
          <br /><br />
          Además, nuestro compromiso con el medio ambiente no se limita solo al agua. Adoptamos un enfoque integral que abarca todas las etapas de la producción, desde la selección responsable de las materias primas hasta la implementación de tecnologías limpias que optimizan los recursos y reducen los desechos. 
          <br /><br />
          Sabemos que la sostenibilidad no es solo una moda, sino una necesidad. Por eso, trabajamos día a día para garantizar que nuestras prácticas reflejen un profundo respeto por el planeta y por las generaciones futuras.
        </p>
      </div>
      <div className="sustainability-highlight">
        <h2>Comprometidos con un Futuro Sostenible</h2>
        <p>
          En CURTIEMBRE ORTEGA, fusionamos tradición e innovación para ofrecer productos de calidad que respeten el medio ambiente. ¡Únete a nosotros en nuestro compromiso con la sostenibilidad!
        </p>
      </div>
    </div>
  );
}

export default Sustainability;
