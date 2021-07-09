import RouterApp from "./routing/RouterApp";
import './app.css'
import ProductosState from "./context/productos/productosState";

function App() {
  return (
    <div>
      <ProductosState>
        <RouterApp/>
      </ProductosState>
    </div>

  );
}

export default App;
