import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h1 className="about-title">Quienes somos</h1>
      <p>
        CURTIEMBRE ORTEGA es una empresa dedicada a la industrialización del cuero ovino y vacuno. En la actualidad productiva se constituye en la empresa líder en su rubro a nivel nacional y es una empresa importante en el sector exportador. Como empresa familiar, tenemos un espíritu emprendedor, la convicción en la calidad y la innovación continua. Con esfuerzo y dedicación fuimos consolidando clientes y convirtiéndonos en el proveedor de cuero preferido en el país. Los invitamos a conocer nuestra empresa.
      </p>

      <div className="about-images">
       
        <div className="about-item">
          <img src="/imangenes/dos.jpg" alt="dos" className="about-image" />
          <p className="about-description">
            La empresa CURTIEMBRE ORTEGA continúa con la actividad de curtido de pieles que viene realizando desde hace ya tres generaciones y que mantiene en plena vigencia la tradición de curtir y trabajar la piel del ganado ovino y vacuno.
          </p>
        </div>

       
        <div className="about-item">
          <img src="/imangenes/tres.jpg" alt="tres" className="about-image" />
          <p className="about-description">
            CURTIEMBRE ORTEGA está comprometida con la calidad y la planificación. Buscamos alcanzar la excelencia empresarial trabajando de acuerdo a estándares de productividad y desempeño del rubro a nivel internacional.
          </p>
        </div>

        
        <div className="about-item">
          <img src="/imangenes/cuatro.jpg" alt="Cuatro" className="about-image" />
          <p className="about-description">
            Nuestro enfoque en innovación tecnológica nos permite desarrollar productos sostenibles y de alta calidad para clientes nacionales e internacionales.
          </p>
        </div>

       
        <div className="about-item">
          <img src="/imangenes/cinco.jpg" alt="Cinco" className="about-image" />
          <p className="about-description">
            Con una red de clientes fieles, nos hemos convertido en referentes en la industria, garantizando excelencia y satisfacción en cada entrega.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
