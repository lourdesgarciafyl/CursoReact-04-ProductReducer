import { useState } from "react";
import { useRef } from "react";

const AddProduct = () => {
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const [form, setForm] = useState({})

  const onChangeForm = (value, field) => {
    setForm({
        ...form,
       [field] : value
    })
    console.log(form)
  }
  return (
    <div className="col-lg-4">
      <form>
        <div className="mb-3">
          <input
            ref={titleRef}
            type="text"
            className="form-control"
            placeholder="Nombre del producto"
            name="title"
            onChange={(event) => onChangeForm(event.target.value, titleRef.current.name)}
          />
        </div>
        <div className="mb-3">
          <input
            ref={categoryRef}
            type="text"
            className="form-control"
            placeholder="Categoria"
            name="category"
            onChange={(event) => onChangeForm(event.target.value, categoryRef.current.name)}
          />
        </div>
        <div className="mb-3">
          <input
            ref={priceRef}
            type="text"
            className="form-control"
            placeholder="Precio"
            name="price"
            onChange={(event) => onChangeForm(event.target.value, priceRef.current.name)}
          />
        </div>
        <div className="mb-3">
          <textarea
            ref={descriptionRef}
            className="form-control"
            rows="3"
            placeholder="Descripcion del producto"
            name="description"
            onChange={(event) => onChangeForm(event.target.value, descriptionRef.current.name)}
          ></textarea>
        </div>
        <button className="btn btn-info">Guardar</button>
      </form>
    </div>
  );
};
export default AddProduct;
