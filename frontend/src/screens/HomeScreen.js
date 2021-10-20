import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import TopRatedProducts from "../components/TopRatedProducts";
// import Meta from '../components/Meta'
import { listProducts } from "../actions/productActions";
import FeaturedProducts from "../components/FeaturedProducts";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  useEffect(() => {
    debugger;
    console.log(products);
  }, [productList]);

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}

      {!keyword ? (
        <div className="catagories-tabs">
          <Row>
            <Col sm>
              <div className="container-topimage">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1612442058361-178007e5e498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="Third slide"
                />
                <h4 className="text-block-topimage">Nature</h4>
              </div>
              <br />
            </Col>

            <Col sm>
              <div className="container-topimage">
                <img
                  className="d-block w-100 overlay-topimage bg-img"
                  src="https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Third slide"
                />
                <h4 className="text-block-topimage">Nature</h4>
              </div>

              <br />
            </Col>
            <Col sm>
              <div className="container-topimage">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/new/slides/031.jpg"
                  alt="Third slide"
                />
                <h4 className="text-block-topimage">Nature</h4>
              </div>
            </Col>
          </Row>
        </div>
      ) : null}

      <h1>
        <center>Latest Products</center>
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.splice(0, 8).map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />

          {!keyword ? (
            <Container>
              <div className="iphone-cover">
                <Row>
                  <Col md={8}>
                    <img
                      className="d-block w-100 img-fluid iphone-cover"
                      src="https://cdn.pixabay.com/photo/2021/09/25/17/43/iphone-13-6655518_960_720.jpg"
                      alt="Third slide"
                      fluid
                    />
                  </Col>

                  <Col md={4}>
                    <h1 className="iphone13-text">
                      SHOP THE NEW IPHONE 13 PRO
                    </h1>
                    <p className="iphone13-text">
                      Get the Ultimate Desktop Setup for Productivity Explore
                      our latest and greatest electronics and accessories –
                      their new features will be sure to blow your mind and your
                      workflow.Get the Ultimate Desktop Setup for Productivity
                      Explore our latest and greatest electronics and
                      accessories – their new features will be sure to blow your
                      mind and your workflow.
                    </p>
                    <Button href="/" variant="dark" className="iphone13-text">
                      Shop Now
                    </Button>
                  </Col>
                </Row>
              </div>
            </Container>
          ) : null}

          {!keyword ? (
            <h1>
              <center>
                <br />
                Top Rated Products
              </center>
            </h1>
          ) : null}
          {!keyword ? <TopRatedProducts /> : null}

          {!keyword ? (
            <Container className="badges">
              <div>
                <br />
                <h2>
                  <center>Why Choose Us?</center>
                </h2>
                <br />
                <Row>
                  <Col md={4}>
                    <center>
                      <i className="fab fa-expeditedssl fa-3x"></i>
                      <br />
                      <br />
                      <h4>SSL Secured</h4>
                      <p classname="text-center">
                        Get the Ultimate Desktop Setup for Productivity Explore
                        our latest and greatest electronics and accessories –
                        their new features will be sure to blow your mind and
                        your workflow.
                      </p>
                    </center>
                  </Col>
                  <Col md={4}>
                    <center>
                      <i className="fas fa-shipping-fast fa-3x"></i>
                      <br />
                      <br />
                      <h4>Islandiwde Fast Delivery</h4>
                      <p classname="text-center">
                        Get the Ultimate Desktop Setup for Productivity Explore
                        our latest and greatest electronics and accessories –
                        their new features will be sure to blow your mind and
                        your workflow.
                      </p>
                    </center>
                  </Col>
                  <Col md={4}>
                    <center>
                      <i className="fas fa-phone fa-3x"></i>
                      <br />
                      <br />
                      <h4>Best Support</h4>
                      <p classname="text-center">
                        Get the Ultimate Desktop Setup for Productivity Explore
                        our latest and greatest electronics and accessories –
                        their new features will be sure to blow your mind and
                        your workflow.
                      </p>
                    </center>
                  </Col>
                </Row>
              </div>
            </Container>
          ) : null}

          <br />

          {!keyword ? (
            <Container className="form-main">
              <h1>
                <center>Contact Us</center>
              </h1>
              <Row>
                <Col className="form-padding">
                  <br />
                  <form
                    action="https://formsubmit.co/nileshvincent@gmail.com"
                    method="POST"
                  >
                    <div className="form-group ">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        required
                      />

                      <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>

                    <br />

                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Message</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        id="exampleFormControlTextarea1"
                        type="text"
                        name="message"
                        placeholder="Write your message here"
                      />
                    </div>
                    <br />

                    <div class="form-group">
                      <label for="exampleFormControlFile1">
                        Example file input
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        name="attachment"
                        accept="image/png, image/jpeg"
                      />
                    </div>
                    <br />
                    <button className="btn btn-primary" type="submit">
                      Send
                    </button>

                    <input
                      type="hidden"
                      name="_next"
                      value="http://localhost:3000/allproducts"
                    />

                    <input type="hidden" name="_template" value="basic" />

                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thank you for contacting us, we'll reply you back shortly"
                    />
                  </form>
                </Col>

                <Col className="form-padding">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        width={800}
                        height={500}
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=malabe&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder={0}
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                      />
                      <a href="https://soap2day-to.com">soap2day</a>
                      <br />
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            ".mapouter{position:relative;text-align:right;height:500px;width:800px;}",
                        }}
                      />
                      <a href="https://www.embedgooglemap.net">
                        embed google map in html
                      </a>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:800px;}",
                        }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          ) : null}
          <br />

          {!keyword ? (
            <Container>
              <div className="about-cover">
                <Row>
                  <Col md={6}>
                    <h1 className="iphone13-text">Read About Our Story</h1>
                    <p className="iphone13-text">
                      Get the Ultimate Desktop Setup for Productivity Explore
                      our latest and greatest electronics and accessories –
                      their new features will be sure to blow your mind and your
                      workflowour latest and greatest electronics and
                      accessories – their new features will be sure to blow your
                      mind and your workflow
                    </p>
                    <Button href="/" variant="dark" className="iphone13-text">
                      Continue Reading
                    </Button>
                  </Col>
                  <Col md={6}>
                    <img
                      className="d-block img-fluid iphone-cover about-image"
                      src="https://images.pexels.com/photos/6368841/pexels-photo-6368841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="Third slide"
                      fluid
                    />
                  </Col>
                </Row>
              </div>
            </Container>
          ) : null}

          {!keyword ? null : null}
          {!keyword ? null : null}
        </>
      )}
    </>
  );
};

export default HomeScreen;
