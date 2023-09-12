import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegacion from "./components/Navegacion";
import FooterPag from "./components/FooterPag";
import AddProduct from "./components/admin/AddProduct";
import ListProduct from "./components/admin/ListProduct";
import Product from "./components/product/Product";
import { useContext,} from "react";
import { AuthContext } from "./contexts/AuthContext";
import { ProductContext } from "./contexts/ProductContext";


function App() {

  // const [products, dispatch] = useReducer(productReducer, initialProducts);
  const {state: products, dispatch, onClickAddProduct} = useContext(ProductContext)
  const {state: user} = useContext(AuthContext);



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
