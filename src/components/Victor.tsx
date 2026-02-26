import React from 'react'

const Victor = () => {
    //Datos personales
    const nombre: string = "Victor"
    const edad: number = 30
    const jobs: string[] = ["Catador de cervezas", "Domador de dinosaurios", "Mago freelance"]
    const hobbies: string[] = ["Traductor de maullidos", "Arquitecto de castillos de arena", "Crítico de memes profesional"]
    const partimeJob: string = "Probador de hamacas profesional"
  return (
    <>
    <div>{nombre}</div>
    <div>{jobs[1]}</div>
    <div>{hobbies[2]}</div>
    <div>{partimeJob}</div>
    </>
  )
}

export default Victor