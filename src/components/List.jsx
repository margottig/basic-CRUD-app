import React, {useState} from 'react'

const List = ({lista, setList}) => {

    const [nombre, setNombre] = useState("");


    const borrarPersonaje = (nombreDelPersonaje) =>{
        const personajeBorrado = lista.filter((personaje) =>{
            return personaje.nombre != nombreDelPersonaje
        })
        setList(personajeBorrado)
    }

    const actualizarPersonaje = (indiceObjeto) =>{
        const personajeActualizado = lista.map(
            (personaje, indice) => {
                if(indice === indiceObjeto){
                    personaje.nombre = nombre
                }
                return personaje
            }
        )
        setList(personajeActualizado)
    }
  
  return (

   <div className='border border-success col-8 p-5'>
   {
    lista.map((personaje, indice)=>(
        <div className='border border-warning col-7 mx-auto '>
            <h3>Nombre: <span>{personaje.nombre}</span></h3>
            <h5>Ciudad: <span>{personaje.ciudad}</span> </h5>
            <button className='btn btn-danger' 
            onClick={()=> borrarPersonaje(personaje.nombre)}> Borrar {personaje.nombre}</button>
            <hr />
            <input type="text" onChange={(e)=>setNombre(e.target.value)} />
            <button className='btn btn-success' 
            onClick={()=>actualizarPersonaje(indice)}>Actualizar Nombre</button>
        </div>
        
))
}


   </div>
    

  )
}

export default List