import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="video-container">
        <video controls autoPlay loop>
          <source src="../video/Multimedia1.mp4" type="video/mp4" />
        </video>
      </div>

      <p className="video-text">
        CURTIEMBRE ORTEGA está comprometida con la calidad, la planificación y ejecución de sus operaciones. Con la participación activa de TODOS, busca alcanzar la excelencia empresarial trabajando de acuerdo a estándares de productividad y desempeño del rubro a nivel internacional, orientados al mejoramiento continuo de sus procesos y productos, para satisfacer las necesidades de sus clientes.
      </p>

      <div className="image-section">
        <div className="image-item">
        <img src="/imangenes/calidad.jpg" alt="Calidad" className="img-fluid" />
        <h3>Calidad</h3>
        <p>Nuestro compromiso con estándares internacionales asegura productos de la más alta calidad.</p>
      </div>
      <div className="image-item">
        <img src="/imangenes/Compromiso.jpg" alt="Compromiso" className="img-fluid" />
        <h3>Compromiso</h3>
        <p>Estamos dedicados a cumplir con los objetivos y necesidades de nuestros clientes.</p>
      </div>
      <div className="image-item">
        <img src="/imangenes/innovacion.jpg" alt="Innovación" className="img-fluid" />
        <h3>Innovación</h3>
        <p>Buscamos constantemente nuevas formas de mejorar y avanzar en nuestra industria.</p>
      </div>
      </div>

  
    </div>
  );
}

export default Home;
