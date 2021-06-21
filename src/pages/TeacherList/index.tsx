import React from 'react'
import PageHeader from '../../components/PageHeader'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export default function TeacherList() {
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article>
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
            Programandor ReactJS. 
            <br /> <br />
            Especialista em projetar telas com tal tecnologia
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
      </main>

    </div>
  );
}