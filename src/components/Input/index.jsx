

export default function Input(){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    function enviar(e){
        e.preventDefault()
        console.log(`Nome: ${nome}`)
        console.log(`E-mail: ${email}`)
    }
    return(
        <>
        <form onSubmit={e => enviar(e)}>
           <div>
            <input
          type="text"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
          </div>

          <div>
          <input 
          type="text" 
          id="nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          />
          </div>
        </form>
        </>
    )
}