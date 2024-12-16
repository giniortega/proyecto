import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-title">Contacto</h1>
      <div className="contact-columns">
        
        <div className="contact-column">
          <h2>Proveedores</h2>
          <form className="contact-form">
            <label htmlFor="supplier-name">Nombre</label>
            <input type="text" id="supplier-name" name="supplier-name" placeholder="Tu nombre" />
            
            <label htmlFor="supplier-email">Correo Electrónico</label>
            <input type="email" id="supplier-email" name="supplier-email" placeholder="Tu correo" />
            
            <label htmlFor="supplier-message">Mensaje</label>
            <textarea id="supplier-message" name="supplier-message" placeholder="Tu mensaje"></textarea>
            
            <button type="submit">Enviar</button>
          </form>
        </div>
        
       
        <div className="contact-column">
          <h2>Clientes</h2>
          <form className="contact-form">
            <label htmlFor="client-name">Nombre</label>
            <input type="text" id="client-name" name="client-name" placeholder="Tu nombre" />
            
            <label htmlFor="client-email">Correo Electrónico</label>
            <input type="email" id="client-email" name="client-email" placeholder="Tu correo" />
            
            <label htmlFor="client-message">Mensaje</label>
            <textarea id="client-message" name="client-message" placeholder="Tu mensaje"></textarea>
            
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
