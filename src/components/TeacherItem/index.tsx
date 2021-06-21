import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export default function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img 
          src="https://avatars.githubusercontent.com/u/71530159?v=4" 
          alt="Gabriel Brito" 
        />
        <div>
          <strong>Gabriel Brito</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Programandor Front-end. 
        <br /> <br />
        Especialista em construir telas com ReackJS.
      </p>

      <footer>
        <p>
          Preço/Hora 
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar e contato
        </button>
      </footer>
    </article>
  );
}