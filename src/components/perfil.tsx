import './perfil.css'

const Perfil = () => {
    //Todos los datos
    const nameUser: string = "Victor"
    const profession: string = "Catador de cervezas"
    const complementedModules: number = 3
    const isActive: boolean = true
    const hobbies: string[] = ["Traductor de maullidos", "Arquitecto de castillos de arena", "Crítico de memes profesional"]
  return (

    <div className="mi-tarjeta-estilo">
      <h2 className="name">{nameUser}</h2>
      <p className="profession">{profession}</p>

      <p>Modulos restantes para graduarse: {10 - complementedModules}</p>

      {isActive ? <span className="tag-states">En linea</span> : null}


    </div>
  )
}

export default Perfil