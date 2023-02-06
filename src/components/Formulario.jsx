import {useState, useEffect} from 'React'; 
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');


  const [error, setError] = useState(false);

    useEffect(()=>{
      if(Object.keys(paciente).length>0){
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setFecha(paciente.fecha);
        setSintomas(paciente.sintomas);
      }
    },[paciente]);


  const crearId= ()=>{
    const fecha = Date.now().toString(36);
    const random= Math.random().toString(36).substring(2);


    return fecha+random;
  }

  const handleSubmit= (e)=>{  //button de formulario para agregar o editar paciente

    e.preventDefault();

    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true);
      return;
    }
      setError(false);
      
    const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      }

        if(paciente.id){
          //editando paciente
          objetoPaciente.id= paciente.id;

          const pacientesActualizados = pacientes.map(pacienteState1=>{
            return pacienteState1.id===paciente.id ? objetoPaciente : pacienteState1

          })
          setPacientes(pacientesActualizados);
          setPacientes({});

        }else{
          //registrando nuevo paciente
          objetoPaciente.id = crearId();
          setPacientes([...pacientes, objetoPaciente]);

        }

        // console.log(paciente);


      //RECETEAR EL FORMULARIO
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
      
    }

  return (


    <div className="sm:w-1/2 lg:w-2/5 sm:h-screen sm:ml-8 mb-5">


      <h2 className="font-black text-3xl text-center">
        Seguimiento
        </h2>
        <p className="text-lg mt-5 text-center mb-8">
          Añade Pacientes y {" "}
          <span className="font-bold text-indigo-600">
            Administralos
          </span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5">

          {error && ( <Error><p>Todos los campos son Obligatorios</p></Error>)}

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre de Mascota
            </label>
            <input
            id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange= { e => setNombre(e.target.value)}
             />
          </div>


          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre de Propietario
            </label>
            <input
            id="propietario"
              type="text"
              placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange= { e => setPropietario(e.target.value)}
             />
          </div>


          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>
            <input
            id="email"
              type="email"
              placeholder="Contacto Email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange= { e => setEmail(e.target.value)}
             />
          </div>


          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Alta
            </label>
            <input
            id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange= { e => setFecha(e.target.value)}
             />
          </div>
         
         
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              sintomas
            </label>
            <textarea
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los Sintomas de la mascota"
              value={sintomas}
              onChange= { e => setSintomas(e.target.value)}
            />
          </div>

          <input type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg
          hover:bg-indigo-400 cursor-pointer transition-colors"
          value={paciente.id? 'Editar Paciente': 'Agregar Paciente'}
          />

        </form>



    </div>
  )
}

export default Formulario
