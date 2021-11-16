import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";

const AnalyticsScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <h1>
        <center>Analytics Dashboard</center>
      </h1>
      <Row className="m-1">
        <Col
          className="border border-secondary"
          style={{ backgroundColor: "#ffa3a3" }}
        >
          <h3>Total Orders</h3>
          <h1>5</h1>
        </Col>
        <Col className="border border-secondary m-1">
          <h3>Orders To be Paid</h3>
          <h1>0</h1>
        </Col>
        <Col className="border border-secondary m-1">
          <h3>Orders To be Delivered</h3>
          <h1>4</h1>
        </Col>
      </Row>
      <Row>
        <h3>
          <center>Most Selling Products</center>
        </h3>
        {products.slice(0, 4).map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>

      <Row className="m-1">
        <Col className="border border-secondary m-1">
          <h3>Sales In Today</h3>
          <h1>$0</h1>
        </Col>
        <Col className="border border-secondary m-1">
          <h3>Sales 30 Days</h3>
          <h1>$8900</h1>
        </Col>
        <Col className="border border-secondary m-1">
          <h3>Sales In This Year</h3>
          <h1>$8900</h1>
        </Col>
      </Row>
    </div>
  );
};

export default AnalyticsScreen;
