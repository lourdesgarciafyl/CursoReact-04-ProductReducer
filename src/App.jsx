import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegacion from "./components/Navegacion";
import FooterPag from "./components/FooterPag";
import AddProduct from "./components/admin/AddProduct";
import ListProduct from "./components/admin/ListProduct";
import Product from "./components/product/Product";
import { useContext, useReducer } from "react";
import { productReducer } from "./reducers/productReducer";
import { AuthContext } from "./contexts/AuthContext";

const initialProducts = [
  {
    id: "sku-0001",
    title: "Galaxy AS3",
    category: "Celulares",
    price: "$120.000",
    description: "Celular 5g con doble pantalla y 4 camaras",
  },
  {
    id: "sku-0002",
    title: "Galaxy A13",
    category: "Celulares",
    price: "$80.000",
    description: "Celular 5g con, 3 Camaras",
  },
  {
    id: "sku-0003",
    title: "Galaxy A22 5g",
    category: "Celulares",
    price: "$98.000",
    description: "Celular 5g con, 4 Camaras, 27mp",
  },
];

function App() {

  const [products, dispatch] = useReducer(productReducer, initialProducts);
  const {state: user} = useContext(AuthContext);

  const onClickAddProduct = (e, formValue) => {
    e.preventDefault();
    const newProdObj = {
      id: "sku-0005",
      title: formValue.title,
      category: formValue.category,
      price: formValue.price,
      description: formValue.description,
    };
    dispatch({
      type: "[Product] - ADD-PRODUCT",
      payload: newProdObj,
    });
  };

  const onDeleteProduct = (productId) => {
    const productsFilter = products.filter((prod) => prod.id != productId);
    dispatch({
      type: "[Product] - DELETE-PRODUCT",
      payload: productsFilter,
    });
  };

  return (
    <>
      <Navegacion />
      <section className="mainSection">
        {user.isLogued && (
          <>
            <h1
              className="display-4 text-center"
              style={{ fontWeight: "lighter" }}
            >
              Product Reducer
            </h1>
            <div
              className="row p-5 justify-content-center"
              style={{ backgroundColor: "#693dae" }}
            >
              <AddProduct onClickAddProduct={onClickAddProduct} />
              <ListProduct
                products={products}
                onDeleteProduct={(value) => onDeleteProduct(value)}
              />
            </div>
          </>
        )}
        <div className="row p-5">
          <Product products={products} />
        </div>
      </section>
      <FooterPag />
    </>
  );
}

export default App;
