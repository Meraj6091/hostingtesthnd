import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
// import Meta from '../components/Meta'
import { listSmartPhones } from "../actions/productActions";

const SmartPhonesScreen = () => {
  const dispatch = useDispatch();

  const productSmartPhones = useSelector((state) => state.productSmartPhones);
  const { loading, error, products } = productSmartPhones;

  useEffect(() => {
    dispatch(listSmartPhones());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Row>
      <h1>
        <center>
          <br />
          SmartPhones
        </center>
      </h1>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Link to={`/product/${product._id}`}>
            <Product product={product} />
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default SmartPhonesScreen;
