import Header from "./components/header";
import { sampleProducts } from "./data";
import { Row, Container, Col} from "react-bootstrap";
function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />

      <main>
        <Container className="mt-3" >
          <Row>
            {sampleProducts.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="col">
                <img
                  src={product.image}
                  alt={product.name}
                  className="prod-image"
                />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer> all right reserved</footer>
    </div>
  );
}

export default App;
