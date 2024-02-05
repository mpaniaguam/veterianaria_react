// import { useEffect } from "react"
import Paciente from "./Paciente"
 
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => { 


    /* Reto #1 => Video 84
    useEffect(() => {
        if(pacientes.length > 0){
           console.log("Nuevo paciente ") 
        } 
    },[pacientes])

    console.log(pacientes) */

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-center text-3xl"> Listado Pacientes </h2>
                    <p className="text-lg mt-5 text-center mb-5">
                        Administra tus {' '}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas </span>
                    </p>

                    {/* Iterar lista de pacientes para que se depliegue en pantalla  */}
                    {/* Lo siguiente es una expresion   */} 
                    {pacientes.map( paciente => {
                    return <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente = {eliminarPaciente}
                        />
                    
                    })}

                </>
            ) : (
                <>
                    <h2 className="font-black text-center text-3xl">No hay pacientes </h2>
                    <p className="text-lg mt-5 text-center mb-5">
                        Agrega pacientes  {' '}
                        <span className="text-indigo-600 font-bold">para su administración</span>
                    </p>
                </>
            )}

            
            

        </div>
    )
}
export default ListadoPacientes

 