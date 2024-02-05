import { useState, useEffect } from "react";
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"



function App() { 

  const obtenerLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes ] = useState(obtenerLS);
  const [paciente, setPaciente ] = useState({});
 
  // Use effect 
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  // Funcion para eliminar un paciente 
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container m-auto mt-20 "> 
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente= {setPaciente}
        /> 
        <ListadoPacientes
          pacientes={pacientes}  
          setPaciente={setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />  
      
      </div>
    </div>     
  )
}

export default App
