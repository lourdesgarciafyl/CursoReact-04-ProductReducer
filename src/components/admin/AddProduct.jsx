const AddProduct = () => {



    return (
  
      <div className="col-lg-4" >
          <form>
              <div className="mb-3">
                  <input 
                      type="text" 
                      className="form-control"  
                      placeholder="Nombre del producto"
                      name='title' 
                  />
              </div>
              <div className="mb-3">
                  <input 
                      type="text" 
                      className="form-control"  
                      placeholder="Categoria"
                      name='category' 
                  />
              </div>
              <div className="mb-3">
                  <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Precio"
                      name='price' 
                  />
              </div>
              <div className="mb-3">
                  <textarea 
                      className="form-control" 
                      rows="3" 
                      placeholder='Descripcion del producto'
                      name='description'>
                  </textarea>
              </div>
              <button className='btn btn-info'>Guardar</button>
          </form>
      </div>
    )
  }
  export default AddProduct