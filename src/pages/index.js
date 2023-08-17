import Formulario from "@/components/Formulario"
import Cabecario from "@/components/Cabecario"

export default function Home(){

  return(
    <>
    <form>
    <Cabecario/>
    <Formulario/>
    </form> 
    </>
  )
}























//import { useState } from "react"
//
//
//export default function Home() {
//
//  const [nome, setNome] = useState("")
//  const [email, setEmail] = useState("")
//
//  function enviar(e){
//    e.preventDefault()
//    console.log(`Nome: ${nome}`)
//    console.log(`E-mail: ${email}`)
//  }
//  return (
//    <>
//      <h1>Formulário</h1>
//      <p>Olá, {nome}!</p>
//      <form
//        onSubmit={e => enviar(e)}>      
//        <div>
//          <label htmlFor="email">E-mail:</label>
//          <input
//          type="text"
//          id="email"
//          value={email}
//          onChange={e => setEmail(e.target.value)}
//          />
//          </div>
//          <div>
//          <label htmlFor="nome">Nome:</label>
//          <input 
//          type="text" 
//          id="nome"
//          value={nome}
//          onChange={e => setNome(e.target.value)}
//          />
//          
//        </div>
//        <input type="submit" value="Cadastrar"/>
//      </form>
//    </>
//  )
//}
