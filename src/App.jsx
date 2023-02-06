import {useState, useEffect} from "React"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {
const [pacientes,setPacientes]= useState(JSON.parse(localStorage.getItem('pacientes'))??[]);
const [paciente, setPaciente] = useState({});

const eliminarPaciente= id=>{

  const pacientesActualizados= pacientes.filter(paciente=> paciente.id !== id);

  setPacientes(pacientesActualizados);
  
}

useEffect(()=>{
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
},[pacientes]);

  return (
    <div className="App">
      <Header />

      <div className="mt-12 sm:flex">
        <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente= {paciente}
            setPaciente= {setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente= {setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
