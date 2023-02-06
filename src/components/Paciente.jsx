

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  // console.log(paciente);

    const confirmarEliminarPaciente= ()=>{

      const respuesta = confirm('esta seguro de Eliminar este paciente');

      if(respuesta){
        eliminarPaciente(paciente.id);
      }
    }

  return (
    <div className="m-3 bg-white shadow-md py-10 px-5 rounded-lg">


      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {' '}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>


      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {' '}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>


      <p className="font-bold mb-3 text-gray-700 uppercase">
        email: {' '}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>


      <p className="font-bold mb-3 text-gray-700 uppercase">
        fecha de alta: {' '}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>


      <p className="font-bold mb-3 text-gray-700 uppercase">
        sintomas: {' '}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>

      <div>
      <button type="button"  className="bg-indigo-600 w-1/5 p-2 text-white font-bold rounded-lg
          hover:bg-indigo-400 cursor-pointer transition-colors"
          onClick={()=>setPaciente(paciente)}>
            Editar
      </button>

      <button type="button"  className=" ml-3 bg-red-500 w-1/5 p-2 text-white font-bold rounded-lg
          hover:bg-red-400 cursor-pointer transition-colors"
          onClick={confirmarEliminarPaciente}
          >
            Eliminar
      </button>
      </div>



    </div>
  )
}

export default Paciente
