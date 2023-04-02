
import {useNavigate} from 'react-router-dom'
import ClienteHabilitados from '../../../Components/Dashboard/DatosCliente/ClienteHabilitados'
import ClienteInhabilitados from '../../../Components/Dashboard/DatosCliente/ClienteInhabilitados'
import { useEffect, useState } from 'react'
import { loadClienteHabilitados, loadClienteInhabilitados } from '../../../Data/DatosCliente'

function DatosCliente() {
  const [data, setdata] = useState([])
  const [ClienteInhabilitado, setInhabilitadoCliente] = useState([])
  const navigate=useNavigate()
  useEffect(()=>{

    const loadClientes=async()=>{
      const response=await loadClienteHabilitados()
      console.log(response)
      setdata(response)
      
    }
    const ClientesInhabilitado=async()=>{
      const response=await loadClienteInhabilitados()
      console.log(response)
      setInhabilitadoCliente(response)
      
    }
    ClientesInhabilitado()
    
    loadClientes()
  },[])
  console.log(data)
  return (
    <>
      
      <main className="main" id="main">
         <div className="d-flex justify-content-center">
          <button className="btn btn-success mx-2" type="submit"
          
          onClick={()=>{
            navigate("/dashboard/datoscliente")
          }}>
            Ver Cliente Natural
          </button>
          <button className="btn btn-primary mx-2" type="submit"
          onClick={()=>{
            navigate("/dashboard/datosclienteEmpresa")
          }}>
            Ver Cliente Empresa
          </button>
        </div> 

        <ClienteHabilitados data={data}/>
        <ClienteInhabilitados ClienteInhabilitado={ClienteInhabilitado}/>
      </main>
    </>
  )
}

export default DatosCliente