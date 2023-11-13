import "./App.css";
import { sampleProducts } from "./data";

function App() {
  return (
    <div>
      <header>TS Ecomerce</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="prod-image"
              />
              <h2>{product.name}</h2>
             <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
    <footer> all right reserved</footer>
    </div>
  );
}

export default App;
