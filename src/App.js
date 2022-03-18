import React from 'react'


const App = () => {
 

  const [ejemplo, setEjemplo] = React.useState([])

      React.useEffect(() => {
    console.log('useEffect')
    obtenerDatos()
      
    },[])
  

  const obtenerDatos = async () => {

    const data = await fetch ('https://api.datos.gob.mx/v2/Records')
    const usuarios = await data.json()
    console.log(usuarios)
    setEjemplo(usuarios)
  }


return (

    <div>
      <h1> Datos de API</h1>
      </div>

)


}
export default App;
