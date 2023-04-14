import React from 'react'

function MasDatosRec({data}) {
  return (
    <div
      className="modal fade"
      id="mas-datos-rechazados"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-xl" id="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Mas datos conductor
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="btn-close"
            ></button>
          </div>
          <div className="modal-body text-dark">
            <div className="container-fluid">
              {data.map((conductor) => (
                <>
                  <div className="row" key={conductor._id}>
                    <div className="col-12 bg-primary text-white text-center mb-1">
                      DATOS CONDUCTOR
                    </div>
                    <div className="col-12 col-xl-6">
                      <div
                        id="carouselExampleDark"
                        className="carousel carousel-dark slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval="10000"
                          >
                            <img
                              src={conductor.imagenesSolicitudRechazada.FotoFrontal}
                              className="d-block w-100"
                              alt=""
                            />
                          </div>
                          <div className="carousel-item" data-bs-interval="2000">
                            <img
                              src={conductor.imagenesSolicitudRechazada.FotoVolco}
                              className="d-block w-50"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={conductor.imagenesSolicitudRechazada.Fotolateral_Der}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-xl-6">
                      <table className="w-100 text-center">
                        <tr>
                          <th colspan="2" className="bg-primary text-white">
                            Datos Tenedor
                          </th>
                        </tr>
                        <tr>
                          <td>Nombre:</td>
                          <td>{conductor.tenedorSolicitudRechazada.nombreTE}</td>
                        </tr>
                        <tr>
                          <td>Apellido:</td>
                          <td>{conductor.tenedorSolicitudRechazada.apellidoTE}</td>
                        </tr>
                        <tr>
                          <td>Numero Documento:</td>
                          <td>{conductor.tenedorSolicitudRechazada.apellidoTE}</td>
                        </tr>
                        <tr>
                          <td>Direccion residencia:</td>
                          <td>{conductor.tenedorSolicitudRechazada.DireccionResidenciaTE}</td>
                        </tr>
                        <tr>
                          <td>Ciudad:</td>
                          <td>{conductor.tenedorSolicitudRechazada.ciudadTE}</td>
                        </tr>
                        <tr>
                          <td>Telefono:</td>
                          <td>{conductor.tenedorSolicitudRechazada.NroTelefonoTE}</td>
                        </tr>
                      </table>
                      <table className="w-100 text-center">
                        <tr>
                          <th colspan="2" className="bg-primary text-white">
                            Contaco Emergencia
                          </th>
                        </tr>
                        <tr>
                          <td>Nombre:</td>
                          <td>{conductor.contactoEmergenciaSolicitudRechazada.nombreCEM}</td>
                        </tr>
                        <tr>
                          <td>Apellido:</td>
                          <td>{conductor.contactoEmergenciaSolicitudRechazada.apellidoCEM}</td>
                        </tr>
                        <tr>
                          <td>Numero Documento:</td>
                          <td>{conductor.contactoEmergenciaSolicitudRechazada.NroDocumentoCEM}</td>
                        </tr>
                        <tr>
                          <td>Correo Electronico:</td>
                          <td>{conductor.contactoEmergenciaSolicitudRechazada.CorreoElectricoCEM}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-xl-6">
                      <table className="w-100 text-center">
                        <tr>
                          <th colspan="2" className="bg-primary text-white">
                            Vehiculo
                          </th>
                        </tr>

                        <tr>
                          <td>Placa Vehiculo</td>
                          <td>{conductor.vehiculoSolicitudRechazada.placaVehiculo}</td>
                        </tr>

                        <tr>
                          <td>Marca</td>
                          <td>{conductor.vehiculoSolicitudRechazada.marca}</td>
                        </tr>

                        <tr>
                          <td>modelo</td>
                          <td>{conductor.vehiculoSolicitudRechazada.modelo}</td>
                        </tr>

                        <tr>
                          <td>Numero Ejes</td>
                          <td>{conductor.vehiculoSolicitudRechazada.numeroEjes}</td>
                        </tr>

                        <tr>
                          <td>Tipo Vehiculo</td>
                          <td>{conductor.vehiculoSolicitudRechazada.tipoVehiculo}</td>
                        </tr>

                        <tr>
                          <td>Fecha Vencimiento</td>
                          <td>{conductor.vehiculoSolicitudRechazada.fechavencSOAT}</td>
                        </tr>

                        <tr>
                          <td>Traccion Vehiculo</td>
                          <td> {conductor.vehiculoSolicitudRechazada.traccionVeh}</td>
                        </tr>

                        <tr>
                          <td>Placas Trailer</td>
                          <td> {conductor.vehiculoSolicitudRechazada.placasTrailer} </td>
                        </tr>

                        <tr>
                          <td>Peso Vacio</td>
                          <td>{conductor.vehiculoSolicitudRechazada.pesoVacio}</td>
                        </tr>

                        <tr>
                          <td>Tipo Combustible</td>
                          <td>{conductor.vehiculoSolicitudRechazada.CombustibleVeh}</td>
                        </tr>

                        <tr>
                          <td>Numero Licencia</td>
                          <td>{conductor.vehiculoSolicitudRechazada.numeroLicenciaVeh}</td>
                        </tr>

                        <tr>
                          <td>Numero Soat</td>
                          <td>{conductor.vehiculoSolicitudRechazada.numeroSOAT}</td>
                        </tr>

                        <tr>
                          <td>Fecha Venimiento Soat</td>
                          <td> {conductor.vehiculoSolicitudRechazada.fechavencSOAT}</td>
                        </tr>

                        <tr>
                          <td>Numero Poliza Responsable</td>
                          <td>{conductor.vehiculoSolicitudRechazada.nroPoliza_ResponCivil}</td>
                        </tr>

                        <tr>
                          <td>Numero Revision Tecnomecanica</td>
                          <td>{conductor.vehiculoSolicitudRechazada.nroRev_TecMecanica}</td>
                        </tr>

                        <tr>
                          <td>Fecha vencimiento Tecnomecanica</td>
                          <td>{conductor.vehiculoSolicitudRechazada.fechaVenc_Tecno}</td>
                        </tr>
                      </table>
                    </div>
                    <div className="col-12 col-xl-6">
                      <table className="w-100 text-center">
                        <tr>
                          <th colspan="2" className="bg-primary text-white">
                            Conductores
                          </th>
                        </tr>

                        <tr>
                          <td>Nombre</td>
                          <td>{conductor.conductorSolicitudRechazada.nombreCON}</td>
                        </tr>

                        <tr>
                          <td>Apellido</td>
                          <td>{conductor.conductorSolicitudRechazada.apellidoCON}</td>
                        </tr>

                        <tr>
                          <td>Tipo Documento</td>
                          <td>{conductor.conductorSolicitudRechazada.tipo_DocumentoCON}</td>
                        </tr>

                        <tr>
                          <td>Numero Documento</td>
                          <td>{conductor.conductorSolicitudRechazada.nroDocumentoCON}</td>
                        </tr>

                        <tr>
                          <td>Nacionalidad</td>
                          <td>{conductor.conductorSolicitudRechazada.nacionalidadCON}</td>
                        </tr>

                        <tr>
                          <td>Fecha Nacimiento</td>
                          <td>{conductor.conductorSolicitudRechazada.fechaNacimientoCON}</td>
                        </tr>

                        <tr>
                          <td>Correo Electronico</td>
                          <td>{conductor.conductorSolicitudRechazada.correoElectronicoCON}</td>
                        </tr>

                        <tr>
                          <td>Correo Electronico Recuperacion</td>
                          <td>{conductor.conductorSolicitudRechazada.correoRecuperacionCON}</td>
                        </tr>

                        <tr>
                          <td>Usuario</td>
                          <td>{conductor.conductorSolicitudRechazada.usuarioCON}</td>
                        </tr>

                        <tr>
                          <td>Numero Telefono</td>
                          <td>{conductor.conductorSolicitudRechazada.nroTelefonoCON}</td>
                        </tr>

                        <tr>
                          <td>Numero Licencia</td>
                          <td>{conductor.conductorSolicitudRechazada.nroLicenciaCON}</td>
                        </tr>
                        
                        <tr>
                          <td>Pregunta Seguridad</td>
                          <td>{conductor.conductorSolicitudRechazada.preguntaSeguridadCON}</td>
                        </tr>

                        <tr>
                          <td>Respuesta Seguridad</td>
                          <td>{conductor.conductorSolicitudRechazada.respuestaSeguridadCON}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <table className="w-100 text-center">
                        <tr>
                          <th colspan="2" className="bg-primary text-white">
                            Datos Propietario
                          </th>
                        </tr>
                        <tr>
                          <td>Nombre:</td>
                          <td>{conductor.propietarioSolicitudRechazada.nombrePRO}</td>
                        </tr>
                        <tr>
                          <td>Apellido:</td>
                          <td>{conductor.propietarioSolicitudRechazada.apellidoPRO}</td>
                        </tr>
                        <tr>
                          <td>Numero Documento:</td>
                          <td>{conductor.propietarioSolicitudRechazada.NroDocumentoPRO}</td>
                        </tr>
                        <h1>sdas</h1>
                        <tr>
                          <td>Direcion residencia:</td>
                          <td> {conductor.propietarioSolicitudRechazada.DireccionResidenciaPRO}</td>
                        </tr>
                        <tr>
                          <td>Ciudad:</td>
                          <td>{conductor.propietarioSolicitudRechazada.ciudadPRO}</td>
                        </tr>
                        <tr>
                          <td>Numero Telefono:</td>
                          <td>{conductor.propietarioSolicitudRechazada.NroTelefonoPRO}</td>
                        </tr>
                      </table>
                    </div>
                    <hr />
                    <div className="col-12 text-center">
                      <button type="button" className="btn btn-primary btn-sm">
                        Habilitar
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#escribir-motivo-inhabilitacion"
                      >
                        Inhabilitar
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default MasDatosRec