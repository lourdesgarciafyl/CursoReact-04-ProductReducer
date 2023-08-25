const ListProduct = ({products, onDeleteProduct}) => {

    return (
      <div className="col-lg-7" >
          <table className="table mt-4 table-resposive" >
              <thead>
                  <tr>
                  <th scope="col">ID</th>
                  <th scope="col">PRODUCTO</th>
                  <th scope="col">PRECIO</th>
                  <th scope="col" className="text-center">Editar</th>
                  <th scope="col"className="text-center">Borrar</th>
                  </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                            <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td className="text-center">
                            <button className='btn btn-info mx-2 w-50'>Editar</button> 
                            </td>
                            <td className="text-center">
                                <button 
                                   className='btn btn-danger w-50' 
                                   onClick={()=>onDeleteProduct(product.id)}>
                                    Eliminar
                                </button>
                            </td>
                            </tr>
                ))}
              </tbody>
          </table>
      </div>
    )
  }

export default ListProduct;  