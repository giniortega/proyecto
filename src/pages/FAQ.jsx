import React, { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "¿Qué materiales utilizan en sus productos?",
      answer: "Utilizamos cuero ovino y vacuno de alta calidad ya que son resistentes a los quimicos que utilizamos.",
    },
    {
      question: "¿Cómo puedo contactar al servicio al cliente?",
      answer: "Puedes contactarnos a través de nuestra página de Contacto o enviándonos un correo ",
    },
    {
      question: "¿Realizan envíos internacionales?",
      answer: "Sí, realizamos envíos a varios países. Contáctanos para más información.",
    },
  ];

  return (
    <div className="faq">
      <h1 className="faq-title">Preguntas Frecuentes</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
