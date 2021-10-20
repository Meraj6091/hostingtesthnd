import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import Product from "../components/Product";

const TopRatedProducts = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Row>
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

export default TopRatedProducts;
