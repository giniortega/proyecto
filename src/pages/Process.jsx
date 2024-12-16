import React from 'react';
import '../styles/Process.css';

const processes = [
  {
    id: 1,
    title: "Conservado",
    description: "El salado se puede realizar con sal húmeda, y en estos casos el cuero fresco se coloca en una estiba de sal y llevado a bodegas donde se apilan. El tiempo del salado es de 21 días. Este paso garantiza que las pieles conserven su calidad antes de proceder al lavado.",
    image: "/imangenes/conservado.jpg", 
  },
  {
    id: 2,
    title: "Lavado",
    description: "Se desarrolla la limpieza de la piel del cuero ovino o vacuno. Estas pieles deben ser lavadas minuciosamente para eliminar la gruesa capa de sal con ayuda de agentes químicos. Este paso es fundamental para asegurar que las pieles estén preparadas para el siguiente proceso.",
    image: "/imangenes/lavado.jpg",
  },
  {
    id: 3,
    title: "Seleccionado",
    description: "Permite seleccionar los cueros que resistieron al lavado químico, ya que en algunas ocasiones los productos químicos pueden debilitar o deteriorar las fibras de las pieles. Solo las pieles de alta calidad pasan este riguroso proceso.",
    image: "/imangenes/seleccionado.jpg", 
  },
  {
    id: 4,
    title: "Curtido",
    description: "El corazón de todo el proceso. Los cueros se introducen en tambores con agentes de curtido que penetran las fibras de la piel, dándole estabilidad y durabilidad. Este paso transforma la piel cruda en cuero usable.",
    image: "/imangenes/procesado.jpg",
  },
  {
    id: 5,
    title: "Secado",
    description: "La piel se extiende en áreas ventiladas, alejadas de la luz solar directa y el calor excesivo. El secado asegura que el cuero no se deforme ni pierda sus propiedades esenciales durante el proceso.",
    image: "/imangenes/secado.jpg",
  },
  {
    id: 6,
    title: "Pintado",
    description: "Los cueros se someten a tratamientos preliminares que aseguran que la pintura se adhiera correctamente. Este paso se realiza cuidadosamente a mano, garantizando acabados uniformes y atractivos.",
    image: "/imangenes/pintado.jpg",
  },
  {
    id: 7,
    title: "Planchado",
    description: "Se utilizan técnicas específicas para ablandar el cuero seco. El planchado puede realizarse mediante presión mecánica, fricción o golpes, logrando así una textura uniforme y suave.",
    image: "/imangenes/planchado.jpg",
  },
  {
    id: 8,
    title: "Recurtido",
    description: "Este proceso añade una segunda capa de curtido que mejora las propiedades del cuero, dándole una apariencia gamuzada, más suave y ligera, ideal para productos de alta calidad.",
    image: "/imangenes/suavizado.jpg",
  },
  {
    id: 9,
    title: "Refinado",
    description: "El cuero se somete a pigmentación y aplicación de aceites que realzan su apariencia y textura. A partir de este paso, el cuero está listo para ser transformado en productos como carteras y zapatos.",
    image: "/imangenes/selectivo.png",
  },
  {
    id: 10,
    title: "Terminado",
    description: "Es la última etapa. El cuero ya curtido puede ser vendido como pieza completa o procesado para adaptarse a las necesidades específicas de los clientes. Este paso asegura que el producto esté listo para el mercado.",
    image: "/imangenes/terminado.jpg",
  },
];


function Process() {
  return (
    <div className="process">
      <h1 className="process-title">Proceso</h1>
      <div className="process-container">
        {processes.map((process) => (
          <div key={process.id} className="process-card">
            <img src={process.image} alt={process.title} className="process-image" />
            <h3>{process.title}</h3>
            <p>{process.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
