import React from "react";

function MasDatos({ data }) {
  console.log(data);
  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-xl" id="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Mas datos conductor
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="btn-close"
            ></button>
          </div>
          <div class="modal-body text-dark">
            <div class="container-fluid">
              {data.map((conductor) => (
                <>
                  <div class="row">
                    <div class="col-12 bg-primary text-white text-center mb-1">
                      DATOS CONDUCTOR
                    </div>
                    <div class="col-12 col-xl-6">
                      <div
                        id="carouselExampleDark"
                        class="carousel carousel-dark slide"
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to="0"
                            class="active"
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
                        <div class="carousel-inner">
                          <div
                            class="carousel-item active"
                            data-bs-interval="10000"
                          >
                            <img
                              src={conductor.imagenes.FotoFrontal}
                              class="d-block w-100"
                              alt=""
                            />
                          </div>
                          <div class="carousel-item" data-bs-interval="2000">
                            <img
                              src={conductor.imagenes.FotoVolco}
                              class="d-block w-50"
                              alt="..."
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src={conductor.imagenes.Fotolateral_Der}
                              class="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          class="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div class="col-12 col-xl-6">
                      <table class="w-100 text-center">
                        <tr>
                          <th colspan="2" class="bg-primary text-white">
                            Datos Tenedor
                          </th>
                        </tr>
                        <tr>
                          <td>Nombre:</td>
                          <td>{conductor.tenedor.nombreTE}</td>
                        </tr>
                        <tr>
                          <td>Apellido:</td>
                          <td>{conductor.tenedor.apellidoTE}</td>
                        </tr>
                        <tr>
                          <td>Numero Documento:</td>
                          <td>{conductor.tenedor.apellidoTE}</td>
                        </tr>
                        <tr>
                          <td>Direccion residencia:</td>
                          <td>{conductor.tenedor.DireccionResidenciaTE}</td>
                        </tr>
                        <tr>
                          <td>Ciudad:</td>
                          <td>{conductor.tenedor.ciudadTE}</td>
                        </tr>
                        <tr>
                          <td>Telefono:</td>
                          <td>{conductor.tenedor.NroTelefonoTE}</td>
                        </tr>
                      </table>
                      <table class="w-100 text-center">
                        <tr>
                          <th colspan="2" class="bg-primary text-white">
                            Contaco Emergencia
                          </th>
                        </tr>
                        <tr>
                          <td>Nombre:</td>
                          <td>{conductor.contactoEmergencia.nombreCEM}</td>
                        </tr>
                        <tr>
                          <td>Apellido:</td>
                          <td>{conductor.contactoEmergencia.apellidoCEM}</td>
                        </tr>
                        <tr>
                          <td>Numero Documento:</td>
                          <td>{conductor.contactoEmergencia.NroDocumentoCEM}</td>
                        </tr>
                        <tr>
                          <td>Correo Electronico:</td>
                          <td>{conductor.contactoEmergencia.CorreoElectricoCEM}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-xl-6">
                      <table class="w-100 text-center">
                        <tr>
                          <th colspan="2" class="bg-primary text-white">
                            Vehiculo
                          </th>
                        </tr>

                        <tr>
                          <td>Placa Vehiculo</td>
                          <td>{conductor.vehiculo.placaVehiculo}</td>
                        </tr>

                        <tr>
                          <td>Marca</td>
                          <td>{conductor.vehiculo.marca}</td>
                        </tr>

                        <tr>
                          <td>modelo</td>
                          <td>{conductor.vehiculo.modelo}</td>
                        </tr>

                        <tr>
                          <td>Numero Ejes</td>
                          <td>{conductor.vehiculo.numeroEjes}</td>
                        </tr>

                        <tr>
                          <td>Tipo Vehiculo</td>
                          <td>{conductor.vehiculo.tipoVehiculo}</td>
                        </tr>

                        <tr>
                          <td>Fecha Vencimiento</td>
                          <td>{conductor.vehiculo.fechavencSOAT}</td>
                        </tr>

                        <tr>
                          <td>Traccion Vehiculo</td>
                          <td> {conductor.vehiculo.traccionVeh}</td>
                        </tr>

                        <tr>
                          <td>Placas Trailer</td>
                          <td> {conductor.vehiculo.placasTrailer} </td>
                        </tr>

                        <tr>
                          <td>Peso Vacio</td>
                          <td>{conductor.vehiculo.pesoVacio}</td>
                        </tr>

                        <tr>
                          <td>Tipo Combustible</td>
                          <td>{conductor.vehiculo.CombustibleVeh}</td>
                        </tr>

                        <tr>
                          <td>Numero Licencia</td>
                          <td>{conductor.vehiculo.numeroLicenciaVeh}</td>
                        </tr>

                        <tr>
                          <td>Numero Soat</td>
                          <td>{conductor.vehiculo.numeroSOAT}</td>
                        </tr>

                        <tr>
                          <td>Fecha Venimiento Soat</td>
                          <td> {conductor.vehiculo.fechavencSOAT}</td>
                        </tr>

                        <tr>
                          <td>Numero Poliza Responsable</td>
                          <td>{conductor.vehiculo.nroPoliza_ResponCivil}</td>
                        </tr>

                        <tr>
                          <td>Numero Revision Tecnomecanica</td>
                          <td>{conductor.vehiculo.nroRev_TecMecanica}</td>
                        </tr>

                        <tr>
                          <td>Fecha vencimiento Tecnomecanica</td>
                          <td>{conductor.vehiculo.fechaVenc_Tecno}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-12 col-xl-6">
                      <table class="w-100 text-center">
                        <tr>
                          <th colspan="2" class="bg-primary text-white">
                            Conductores
                          </th>
                        </tr>

                        <tr>
                          <td>Nombre</td>
                          <td>{conductor.unicoConductor.nombreCON}</td>
                        </tr>

                        <tr>
                          <td>Apellido</td>
                          <td>{conductor.unicoConductor.apellidoCON}</td>
                        </tr>

                        <tr>
                          <td>Tipo Documento</td>
                          <td>{conductor.unicoConductor.tipo_DocumentoCON}</td>
                        </tr>

                        <tr>
                          <td>Numero Documento</td>
                          <td>{conductor.unicoConductor.nroDocumentoCON}</td>
                        </tr>

                        <tr>
                          <td>Nacionalidad</td>
                          <td>{conductor.unicoConductor.nacionalidadCON}</td>
                        </tr>

                        <tr>
                          <td>Fecha Nacimiento</td>
                          <td>{conductor.unicoConductor.fechaNacimientoCON}</td>
                        </tr>

                        <tr>
                          <td>Correo Electronico</td>
                          <td>{conductor.unicoConductor.correoElectronicoCON}</td>
                        </tr>

                        <tr>
                          <td>Correo Electronico Recuperacion</td>
                          <td>{conductor.unicoConductor.correoRecuperacionCON}</td>
                        </tr>

                        <tr>
                          <td>Usuario</td>
                          <td>{conductor.unicoConductor.usuarioCON}</td>
                        </tr>

                        <tr>
                          <td>Numero Telefono</td>
                          <td>{conductor.unicoConductor.nroTelefonoCON}</td>
                        </tr>

                        <tr>
                          <td>Numero Licencia</td>
                          <td>{conductor.unicoConductor.nroLicenciaCON}</td>
                        </tr>

                        <tr>
                          <td>Contraseña</td>
                          <td>{conductor.unicoConductor.contrasenaCON}</td>
                        </tr>

                        <tr>
                          <td>Pregunta Seguridad</td>
                          <td>{conductor.unicoConductor.preguntaSeguridadCON}</td>
                        </tr>

                        <tr>
                          <td>Respuesta Seguridad</td>
                          <td>{conductor.unicoConductor.respuestaSeguridadCON}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <table class="w-100 text-center">
                        <tr>
                          <th colspan="2" class="bg-primary text-white">
                            Datos Propietario
                          </th>
                        </tr>
                        <tr>
                          <td>Nombre:</td>
                          <td>{conductor.propietario.nombrePRO}</td>
                        </tr>
                        <tr>
                          <td>Apellido:</td>
                          <td>{conductor.propietario.apellidoPRO}</td>
                        </tr>
                        <tr>
                          <td>Numero Documento:</td>
                          <td>{conductor.propietario.NroDocumentoPRO}</td>
                        </tr>
                        <tr>
                          <td>Direcion residencia:</td>
                          <td> {conductor.propietario.DireccionResidenciaPRO}</td>
                        </tr>
                        <tr>
                          <td>Ciudad:</td>
                          <td>{conductor.propietario.ciudadPRO}</td>
                        </tr>
                        <tr>
                          <td>Numero Telefono:</td>
                          <td>{conductor.propietario.NroTelefonoPRO}</td>
                        </tr>
                      </table>
                    </div>
                    <hr />
                    <div class="col-12 text-center">
                      <button type="button" class="btn btn-primary btn-sm">
                        Habilitar
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm"
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
  );
}

export default MasDatos;
