import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="d-flex flex-column h-100">

        {/* FOOTER */}
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <h5 className="h1 text-white">FB.</h5>
                <p className="small text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt.
                </p>
                <p className="small text-muted mb-0">
                  © Copyrights. All rights reserved.{" "}
                  <a className="text-white" href="#">
                    greylightshop.com
                  </a>
                </p>
              </div>
              <div className="col-lg-2 col-md-6 text-white">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-white">
                  <li>
                    <a className="text-secondary" href="'/'">Home</a>
                  </li>
                  <li>
                    <a className="text-secondary" href="#">About</a>
                  </li>
                  <li>
                    <a className="text-secondary" href="#">Get started</a>
                  </li>
                  <li>
                    <a className="text-secondary" href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className=" list-unstyled text-white">
                  <li>
                    <a className="text-secondary" href="#">Home</a>
                  </li>
                  <li>
                    <a className="text-secondary" href="#">About</a>
                  </li>
                  <li>
                    <a className="text-secondary" href="#">Get started</a>
                  </li>
                  <li>
                    <a className="text-secondary" href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt.
                </p>
                <form action="#">
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-primary"
                      id="button-addon2"
                      type="button"
                    >
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
      

    )
}

export default Footer
