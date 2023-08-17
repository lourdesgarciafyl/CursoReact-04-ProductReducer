import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/Navegacion'
import FooterPag from './components/FooterPag';
import AddProduct from './components/admin/AddProduct';
import ListProduct from './components/admin/ListProduct';
import Product from './components/product/Product';

function App() {
 
  return (
    <>
    <Navegacion />
    <section className='mainSection'>
      <h1 className='display-4 text-center' style={{  fontWeight:'lighter'}}>Product Reducer</h1>
      <div className='row p-5 justify-content-center' style={{ backgroundColor: '#693dae' }}>
        <AddProduct />
        <ListProduct />
      </div>
      <div className='row p-5'>
        < Product/>
      </div>
    </section>
    <FooterPag />
    </>
  )
}

export default App
