import styles from './styles.module.css';
import Cabecario from '../Cabecario';

import React, { useState } from 'react';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  function enviar(e) {
    e.preventDefault();
    console.log(`Nome: ${nome}`);
    console.log(`E-mail: ${email}`);
  }

  return (
    <>
      <fieldset className={styles.fieldset}>

        <header>
            <Cabecario/>
        </header>
        <form className={styles.formulario} onSubmit={enviar}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Maria de Oliveira"
            />
          </div>

          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="maria.oliveira@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="sexo">Sexo:</label>
            <input type="radio" name="sexo" value="masculino" /> Masculino<br />
            <input type="radio" name="sexo" value="feminino" /> Feminino<br />
          </div>

          <div>
            <label htmlFor="curso">Curso: </label>
            <select name="curso" id="curso">
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="PHP">PHP</option>
              <option value="JAVA">JAVA</option>
            </select>
          </div>

          <div>
            <label htmlFor="msg">Descreva o atendimento especial:</label>
            <textarea id="msg" name="msg"></textarea>
          </div>

          <div>
            <input type="radio" name="termo" value="feminino" /> Estou de acordo com os termos de serviço<br />

            <button type="submit">Realizar Inscrição</button>
          </div>
        </form>
      </fieldset>
    </>
  );
}
