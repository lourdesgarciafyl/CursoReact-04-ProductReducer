const ListProduct = () => {

    return (
      <div className="col-lg-7" >
          <table className="table mt-4 table-resposive" >
              <thead>
                  <tr>
                  <th scope="col">ID</th>
                  <th scope="col">PRODUCTO</th>
                  <th scope="col">PRECIO</th>
                  <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                  <th scope="row">SKU-78765</th>
                  <td>Apple iPhone XR (Red, 128 GB)</td>
                  <td>$125.365</td>
                  <td className="text-center">
                      <button className='btn btn-info mx-2 w-25'>Editar</button> 
                      <button className='btn btn-danger w-25 pe-5'>Eliminar</button>
                  </td>
                  </tr>
              </tbody>
          </table>
      </div>
    )
  }

export default ListProduct;  