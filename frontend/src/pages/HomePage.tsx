import { Col, Row } from "react-bootstrap";
import { sampleProducts } from "../data";
import { Link } from "react-router-dom";
import { State } from "../types/State";
import { Action } from "../types/Action";



const initialState: State = {
  products: [],
  loading: true,
  error: '',
}

const reducer =(state: State , action: Action) =>{
   switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true}
    case 'FETCH_SUCCESS':
        return {...state, product:action.payload, loading: false}
    case 'FETCH_FAIL':
          return {...state, product:action.payload, loading: false}   
    }
}


const HomePage = () => {
  return (
    <div>
      <Row>
        {sampleProducts.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3} className="col">
            <Link to={"/product/" + product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="prod-image"
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
          </Col>
        ))}
      </Row>
      Col
    </div>
  );
};

export default HomePage;
