import { Col, Row } from "react-bootstrap";
import { sampleProducts } from "../data";
import { Link } from "react-router-dom";
import { State } from "../types/State";
import { Action } from "../types/Action";
import { useReducer, useEffect } from "react";
import { ApiError } from "../types/ApiError";
import axios from "axios";
import { getError } from "../utils";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const initialState: State = {
  products: [],
  loading: true,
  error: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, product: action.payload, loading: false };
  }
};

const HomePage = () => {
  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err as ApiError) });
      }
    };
    fetchData();
  }, []);
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
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
