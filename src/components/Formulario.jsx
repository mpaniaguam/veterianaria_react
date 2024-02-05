import { useState, useEffect } from 'react';
import Error from './Error'

 
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    // State para una alerta 
    const [error, setError] = useState(false);

    useEffect(() => {
       if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setHora(paciente.hora)
        setSintomas(paciente.sintomas) 
       } 
    }, [paciente]) 

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion del Formulario
        if( [nombre, propietario, email, fecha, hora, sintomas].includes('')) {
            console.log('Hay al menos un elemento vacio')
            setError(true)
            return;
        }

        setError(false)


        //Construir objeto de Pacientes 
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha,  
            hora,
            sintomas 
        } 

        // Actualizando paciente cuando el usuario lo edita 
        if(paciente.id) {
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( 
                pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
            setPacientes(pacientesActualizados)
            // Regresarlo a objeto 
            setPaciente({})
        }else {
            objetoPaciente.id = generarId();
            // Hacer una copia del arreglo original
            setPacientes([...pacientes, objetoPaciente]);
        }

       
        

        //Reiniciar el formulario 
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')  
        setHora('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes 
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold " > Administralos </span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
               
                {/* Componente de Error para mostrar la alerta  */}
                { error &&  <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text" 
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md "
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md "
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="cita" className="block text-gray-700 uppercase font-bold">
                        Fecha de cita
                    </label>
                    <input
                        id="cita"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md "
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="hora" className="block text-gray-700 uppercase font-bold">
                        Hora de la cita
                    </label>
                    <input 
                        id="hora"
                        type="time"
                        name="eta"
                        min="08:00" max="18:00" step="1800"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md  "
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        placeholder="Describe los Síntomas "
                        className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md "
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                    className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-400 cursor-pointer transition-colors "
                />
            </form>
        </div>
    )
}

export default Formulario 