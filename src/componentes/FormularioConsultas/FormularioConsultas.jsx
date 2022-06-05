import React, { useState, useEffect } from "react";
import useConsultas from "../../Hooks/useConsultas";
import { useParams } from 'react-router-dom'
import Alerta from "../mensajes/Alerta";
import "./FormularioConsultas.css";


const FormularioConsultas = () => {
  const [id, setId] = useState(null)
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [edad, setEdad] = useState("")
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const params = useParams();

  const { mostrarAlerta, alerta, submitConsulta, consulta } = useConsultas();

  useEffect(() => {
    if (consulta.nombrePaciente) {
      setId(consulta._id)
      setNombrePaciente(consulta.nombrePaciente)
      setEdad(consulta.edad)
      setFecha(consulta.fecha.split('T')[0])
      setSintomas(consulta.sintomas)
    }
  }, [params])


  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombrePaciente, edad, fecha, sintomas].includes('')) {
      mostrarAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })

      return
    }
    // Pasasr los datos hacia el provider
    await submitConsulta({ id, nombrePaciente, edad, fecha, sintomas })
    setNombrePaciente('')
    setEdad('')
    setFecha('')
    setSintomas('')
  }

  const { msg } = alerta;


  return (
    <form className="form-consulta" onSubmit={handleSubmit}>
      {msg && <Alerta alerta={alerta} />}
      <div className="">
        <label className="form-label" htmlFor="nombre">Nombre del paciente</label>
        <input
          id="nombre"
          type="text"
          placeholder="Ingrese el nombre de su mascota"
          className="form-input"
          value={nombrePaciente}
          onChange={(e) => setNombrePaciente(e.target.value)}
        />
      </div>

      <div className="form-div">
        <label className="form-label" htmlFor="edad">Edad del paciente</label>
        <input
          id="edad"
          type="text"
          placeholder="Ingrese la edad de su mascota"
          className="form-input"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <div className="">
        <label className="form-label" htmlFor="fecha">Fecha consulta</label>
        <input
          id="fecha"
          type="date"
          className="form-input"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <div className="">
        <label className="form-label" htmlFor="sintomas">Sintomas del paciente</label>
        <textarea
          id="sintomas"
          placeholder="Por favor, describa los síntomas que tiene su mascota"
          className="form-input"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />
      </div>




      <input
        type="submit"
        value={id ? 'Actualizar Consulta' : 'registrar los datos'}
        className="form-registrar" />

    </form>
  );
};

export default FormularioConsultas;
