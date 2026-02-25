import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MiComponente from './components/MiComponente'
import MiComponente from './components/MiComponente' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello, React!</h1>
        <MiComponente />
        <p>Sirve para crear Componentes: En lugar de escribir un código gigante, divides tu web en piezas pequeñas y reutilizables (un botón, una barra de navegación, una tarjeta de producto).

        Es Declarativo: Tú le dices a React qué quieres ver en pantalla ("quiero un botón rojo"), y React se encarga de actualizar el DOM (el dibujo de la web) de forma eficiente cuando los datos cambian.

        Velocidad: React usa algo llamado "Virtual DOM", lo que permite que solo se actualice la parte de la página que cambió, sin recargar todo el sitio.</p>
      </div>
      <MiComponente />
    </>
  )
}

export default App
