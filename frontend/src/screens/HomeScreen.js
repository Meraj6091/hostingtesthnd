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
              <Link to="/smartphones">
                <div className="container-topimage">
                  <img
                    className=" opacity d-block w-100"
                    src="https://images.pexels.com/photos/4195326/pexels-photo-4195326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="first slide"
                  />
                  <h4 className="text-block-topimage">Mobile Phones</h4>
                </div>
              </Link>
              <br />
            </Col>

            <Col sm>
              <Link to="/Computers">
                <div className="container-topimage">
                  <img
                    className="opacity d-block w-100"
                    src="https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="second slide"
                  />
                  <h4 className="text-block-topimage">Computers</h4>
                </div>
              </Link>
              <br />
            </Col>
            <Col sm>
              <Link to="/Electronics">
                <div className="container-topimage">
                  <img
                    className=" opacity d-block w-100"
                    src="https://images.pexels.com/photos/377711/pexels-photo-377711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Third slide"
                  />
                  <h4 className="text-block-topimage">Electronics</h4>
                </div>
              </Link>
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
                    <h1 className="iphone13-text">SHOP THE NEW IPHONE 13</h1>
                    <p className="iphone13-text">
                      Introduced on September 14, the iPhone 13 and iPhone 13
                      mini are Apple's newest flagship iPhones on the more
                      affordable end, and are being sold alongside the more
                      expensive iPhone 13 Pro and iPhone 13 Pro Max. The iPhone
                      13 and iPhone 13 mini are ideal for those who don't need
                      pro-level camera features.
                    </p>
                    <Button
                      href="/product/618a1c0341c296339c6e9ee7/"
                      variant="dark"
                      className="iphone13-text"
                    >
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
                      Grey-Light is a Professional E-commerce Platform. Here we
                      will provide you only best and top rated products, which
                      you will like very much. We're dedicated to providing you
                      the best of Electronic items with a focus on dependability
                      and Computers, laptops. smart phones. We're working to
                      provide you the bestElectronic items to you doorstep .
                    </p>
                    <Button
                      href="/about"
                      variant="dark"
                      className="iphone13-text"
                    >
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

          {!keyword ? (
            <div className="news-letter">
              <link
                href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
                rel="stylesheet"
                type="text/css"
              />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n",
                }}
              />
              <div id="mc_embed_signup">
                <form
                  action="https://gmail.us20.list-manage.com/subscribe/post?u=c3db88653fd6a56b0207b473b&id=123fbcd134"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll">
                    <br />
                    <h2>
                      <center>Subscribe To Our NewsLetter</center>
                    </h2>
                    <div className="indicates-required">
                      <span className="asterisk">*</span> indicates required
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">
                        Email Address <span className="asterisk">*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-FNAME">First Name </label>
                      <input
                        type="text"
                        name="FNAME"
                        className
                        id="mce-FNAME"
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-LNAME">Last Name </label>
                      <input
                        type="text"
                        name="LNAME"
                        className
                        id="mce-LNAME"
                      />
                    </div>
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      />
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      />
                    </div>{" "}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_c3db88653fd6a56b0207b473b_123fbcd134"
                        tabIndex={-1}
                      />
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        defaultValue="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default HomeScreen;
