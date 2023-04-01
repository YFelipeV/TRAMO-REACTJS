import Modal from "./Modal";


  
function PqrsCards({data}) {
  console.log(data)
  return (
    <>
      {data.map(({ name, id }) => (
        <tr key={id}>
          <td className="text-center pt-3 ">{name}</td>
          <td className=" pt-3">
            {id > 5
              ? "⭐⭐⭐⭐⭐⭐"
              : id == 5
              ? "⭐⭐⭐⭐⭐"
              : id == 4
              ? "⭐⭐⭐⭐"
              : id == 3
              ? "⭐⭐⭐"
              : id == 2
              ? "⭐⭐"
              : id == 1
              ? "⭐"
              : "0"}
          </td>

          <td className="p-3 ">
            <button
              href=""
              className="m-0 p-1 text-white btn  bg-primary w-50"
              data-bs-toggle="modal"
              data-bs-target="#peticion"
            >
              Ver mas...
              <i className="  bi bi-cursor   fs-6"></i>
            </button>
          </td>
        </tr>
      ))}
      <Modal/>
    </>
  );
}

export default PqrsCards;
