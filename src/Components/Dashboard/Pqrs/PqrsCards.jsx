import Modal from "./Modal";
import ReactStarts from "react-stars";

function PqrsCards({ data }) {
  
  return (
    <>
      {data.map(({ name, id }) => (
        <tr key={id}>
          <td className="text-center pt-3 filas_info_corta">{name}</td>
          <td className=" pt-3 filas_info_corta">
            <div className="d-flex justify-content-center">
            <ReactStarts edit={false} value={id} size={28} />
            </div>
          
          </td>

          <td className="p-3 filas_info_corta">
            <button
              href=""
              className="btn bg-blue px-4"
              data-bs-toggle="modal"
              data-bs-target="#peticion"
            >
              Ver mas...
              <i className="  bi bi-cursor   fs-6"></i>
            </button>
          </td>
        </tr>
      ))}
      <Modal />
    </>
  );
}

export default PqrsCards;
