import styles from './styles.module.css';
import Cabecario from '../Cabecario';
import Input from '../Input';
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
        <form onSubmit={enviar}>

          <div className={styles.card}>
            <label htmlFor="nome">Nome:</label>
            <Input
              type="text"
              id="nome"
              
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Maria de Oliveira"
            />
          </div>

          <div className={styles.card}>
            <label htmlFor="email">E-mail:</label>
            <Input
              type="text"
              id="email"
              
              onChange={(e) => setEmail(e.target.value)}
              placeholder="maria.oliveira@gmail.com"
            />
          </div>

          <div className={styles.card}>
            <label htmlFor="sexo">Sexo: </label><br/>
              <div className={styles.radioContainer}>
                <input type="radio" name="sexo" value="masculino" id="masculino" />
                <label htmlFor="masculino">Masculino</label>
                <input type="radio" name="sexo" value="feminino" id="feminino" />
                <label htmlFor="feminino">Feminino</label>
              </div>
          </div>

          <div className={styles.card}> 
            <label htmlFor="curso">Curso: </label>
            <select name="curso" id="curso">
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="PHP">PHP</option>
              <option value="JAVA">JAVA</option>
            </select>
          </div>

          <div className={styles.card}>
            <label htmlFor="msg">Descreva o atendimento especial:</label>
            <textarea id="msg" name="msg" rows="5"></textarea>
          </div>

          <div className={styles.card1}>
            <input type="checkbox" name="termo" value="feminino" /> Estou de acordo com os termos de serviço<br/>
          </div>

            <button className={styles.botao} type="submit">Realizar Inscrição</button>
          
        </form>
      </fieldset>
    </>
  );
}
