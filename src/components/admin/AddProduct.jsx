import { useRef } from "react";
import { useForm } from "../../hooks/useForm";

const data =  {
  id: 'sku-0001',
  title: 'Galaxy AS3',
  category: 'Celulares',
  price: '$120.000',
  description: 'Celular 5g con doble pantalla y 4 camaras',
}

const AddProduct = ({ onClickAddProduct }) => {
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);

  const {form, onChangeForm} = useForm(data);

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
            value={form.title}
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
            value={form.category}
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
            value={form.price}
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
            value={form.description}
            onChange={(event) => onChangeForm(event.target.value, descriptionRef.current.name)}
          ></textarea>
        </div>
        <button 
        className="btn btn-info"
        onClick={(event) => onClickAddProduct(event, form)}>Guardar</button>
      </form>
    </div>
  );
};
export default AddProduct;
