import React, {useState} from 'react'

const Form = ({lista, setList}) => {

    const [nombre, setNombre] = useState("");
    const [ciudad, setCiudad] = useState("");

    const adminFormulario = (evento) => {
        evento.preventDefault();
        console.log(evento.target);

        const nuevoPersonaje={
            nombre,
            ciudad
        }
        setList([...lista, nuevoPersonaje])

    }



  return (

    <div className='border border-danger p-2'>
        <form className="form" onSubmit={adminFormulario} >
        
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" onChange={(evento) =>setNombre(evento.target.value)}  className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Ciudad</label>
                <input type="text" onChange={(evento) =>setCiudad(evento.target.value)} className="form-control"/>
            </div>
        
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Form