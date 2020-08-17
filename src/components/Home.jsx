import React from "react";
import phoneMockup from "../images/phoneMockup.png";
import menuimage1 from "../images/menuimage1.png";
import * as icons from "../icons/allicons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container homePageCss">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">Epantri</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavHome"
          aria-controls="navbarNavHome"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-2" id="navbarNavHome">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link pr-3" href="#why">
                Why we do it? <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pr-3" href="#tourfeatures">
                Tour Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pr-3" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pr-3" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pr-3" href="/register">
                <button className="btn btn-warning">SignUp Now</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="row ml-4">
        <div className="col-lg-5 col-xs-4 col-md-7 d-flex justify-content-center flex-column">
          <h1 style={{ fontWeight: "700" }}>
            Start your online journey with us.
          </h1>
          <p className="lead">A whole new way to look at your restaurant.</p>
        </div>
        <div className="col-lg-7 col-xs-8 col-md-5 m-0  d-flex align-items-center flex-column">
          <img className="image-responsive" src={phoneMockup} alt="Logo" />
        </div>
      </main>

      <div className="row" style={{ marginTop: "8rem" }}>
        <div className="col">
          <span style={{ fontSize: "72px", fontWeight: "800" }}>Epantri</span>
          <p style={{ fontSize: "20px" }}>
            Due to Covid-19, restaurants were amongst the most hard hit
            businesses. And moving to existing online platform was in-effective,
            time-consuming, and unreasonably expensive. Epantri aims to solve
            these issues by providing an online platform that works from{" "}
            <strong style={{ fontSize: "26px" }}>day one!</strong>.
          </p>
        </div>
      </div>

      <div
        className="row"
        id="tourfeatures"
        style={{ marginTop: "8rem", paddingTop: "5rem" }}
      >
        <div className="col text-center">
          <span
            style={{
              fontSize: "72px",
              fontWeight: "800",
            }}
          >
            Our Features
          </span>
        </div>
      </div>

      <div className="row" style={{ marginTop: "10rem" }}>
        <div className="card-deck">
          <div className="card" style={{ borderRadius: "25px" }}>
            {icons.menuListIcon}
            <div className="card-body align-items-end">
              <h5 className="card-title text-center cardHomePageTitle">
                Menu Builder
              </h5>
              <p className="card-text mt-4">
                In-built solutions that help you have a fully functional menu.
                Just add in your categories and dishes, we will do the rest.
              </p>
            </div>
          </div>
          <div className="card" style={{ borderRadius: "25px" }}>
            {icons.menuIconHomePage}
            <div className="card-body align-items-end">
              <h5 className="card-title text-center cardHomePageTitle">
                Manage your store
              </h5>
              <p className="card-text mt-4">
                We will help you to completely manage your store online, so that
                you don't need to worry.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  We can even manage your google listing or any online presence
                  that you may have
                  <span className="align-top">*</span>.
                </small>
              </p>
            </div>
          </div>
          <div className="card" style={{ borderRadius: "25px" }}>
            {icons.helpIconHomePage}
            <div className="card-body align-items-start">
              <h5 className="card-title text-center cardHomePageTitle">
                Customer Service
              </h5>
              <p className="card-text mt-4">
                We are here to simplify your restaurant. Connect with us to get
                help anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "10rem" }}>
        <div className="col-12 align-items-center">
          <div className="jumbotronwithImage">
            <img
              className="image-responsive"
              width="100%"
              height="100%"
              src={menuimage1}
              alt="Logo2"
            />
            <div className="col-md-10 col-xs-4 mx-auto jumbotronHomePage">
              <span className="lead">
                <h1>Simplifying Management</h1>
              </span>
              <div className="row mt-4">
                <div className="col-md-4 col-xs-2">
                  {icons.brickIcon}
                  <p className="jumbotronText">
                    Easy signup process. Simplest store management ever. No
                    extra papework. No hidden fees or extra costs.
                  </p>
                </div>
                <div className="col-md-4 col-xs-2">
                  {icons.calendarIcon}
                  <p className="jumbotronText">
                    Regular improvements that continue to simplify management.
                    And updates that don't require a learning curve.
                  </p>
                </div>
                <div className="col-md-4 col-xs-2">
                  {icons.paymentIcon}
                  <p className="jumbotronText">
                    Secure and hassle free payment plans. Cancel Anytime. We
                    stay 100% transparent with our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        id="why"
        style={{ marginTop: "8rem", paddingTop: "5rem" }}
      >
        <div className="col-md-6 col-xs-4 imageCardsHomePage">
          Image Comes here
        </div>
        <div className="col-md-6 col-xs-4">
          <h1 style={{ fontWeight: "500", textAlign: "center" }}>
            Why we do it?
          </h1>
          <ul style={{ fontSize: "18px" }}>
            <li className="mb-2">
              We want stores to enter into the online marketplace at an
              affordable price. That means they can keep 100% of their profits,
              and we can focus on helping them to do so.
            </li>
            <li className="mb-2">
              Most systems in place are too complex, and require a tech person
              to just get started with. Ours is designed to be as simple as
              possible.
            </li>
            <li className="mb-2">
              We focus entirely on our ordering and management platform. We
              charge our customers based on the service we provide. That means
              no one in our company gets underpaid, or considered a freelancer.
            </li>
          </ul>
        </div>
      </div>
      <div
        className="row"
        id="pricing"
        style={{ marginTop: "8rem", paddingTop: "5rem" }}
      >
        <div className="col-md-6 col-xs-4">
          <h1 style={{ fontWeight: "500", textAlign: "center" }}>Pricing</h1>
          <ul style={{ fontSize: "20px" }}>
            <li className="mb-2">
              Unlimited number of Menu Items and Categories
              <p>
                <small>
                  Add and customize availablity of items during the day. Add
                  buffet options to existing menu. Provide customers with the
                  option to customize their orders.
                </small>
              </p>
            </li>
            <li className="mb-2">
              Google Address Verification{" "}
              <p>
                <small>So that it's easier for customers to reach you.</small>
              </p>
            </li>
            <li className="mb-2">
              Sticky Menu QR Code for dining tables
              <p>
                <small>
                  Much safer for customers to read on their phones. Means less
                  things for you to worry about.
                </small>
              </p>
            </li>
            <li className="mb-2">
              Priority Support
              <p>
                <small>Get prioritized support when you need it.</small>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-xs-4 imageCardsHomePage d-flex justify-content-center align-items-center">
          <div className="col mt-4">
            <div className="card" style={{ borderRadius: "25px" }}>
              <div className="card-body">
                <h1 className="card-title text-center pricingCardTitle">
                  $89.99<span style={{ fontSize: "20px" }}>/month</span>
                </h1>
                <ul
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <li className="mb-2">Free 14-day trial.</li>
                  <li className="mb-2">
                    Start with no Credit Card.
                    <p>
                      <small>
                        Provide only when the trial ends and you're ready to do
                        so.
                      </small>
                    </p>
                  </li>
                  <li className="mb-2">
                    Cancel Anytime
                    <p>
                      <small>No contract required. No questions asked.</small>
                    </p>
                  </li>
                  <li className="mb-2">
                    Any questions or needs?
                    <p>
                      <small>
                        <Link>Just let us know</Link>
                      </small>
                    </p>
                  </li>
                </ul>
                <a className="nav-link pr-3" href="/register">
                  <button className="btn btn-warning btn-block">
                    SignUp Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="container py-5" style={{ marginTop: "12rem" }}>
        <div className="row">
          <div className="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="d-block mb-2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
              <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
              <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
              <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
              <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
              <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
            </svg>
            <small className="d-block mb-3 text-muted">© 2017-2018</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Business
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Education
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Government
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Gaming
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
