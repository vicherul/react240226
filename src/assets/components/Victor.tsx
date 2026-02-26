import React from 'react'

const Victor = () => {

  //Datos personales de Victor

  const name: string = 'Victor'
  const edad: number = 38
  const jobs: string[] = ['triatleta', 'montañista', 'youtuber']
  
  return (
    <>
    <div>{name} que tiene {edad} años de edad</div>
    <div>{edad}</div>
    <div>{jobs.join(', ')}</div>
    </>
  )
}


export default Victor