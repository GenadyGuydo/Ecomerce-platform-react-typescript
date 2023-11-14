import Header from "./components/header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />

      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer> all right reserved</footer>
    </div>
  );
}

export default App;
