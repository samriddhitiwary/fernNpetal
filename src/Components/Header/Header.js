import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";

import React, { useState } from "react";

import Col from "react-bootstrap/Col";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";

import "./Header.css";
import { Dropdown } from "bootstrap";

const Header = () => {
  return (
    <div className="Header_sticky">
      <div className="info">
        Currency <b>INR</b> | <b>Franchise Enquires | Corporate Gifts| More</b>
      </div>

      <div className="middle-bar-container">
        <div style={{ flexGrow: 2 }}><img className= "middle-bar-container-img" src="images/Header/fnp-logo.png"></img></div>
        <div style={{ flexGrow: 4}}><input type="text" name="search" placeholder="Search flower cakes gifts etc..."></input></div>
        <div style={{ flexGrow: 3, marginTop: "23px" }}><div className="searh-del-loc"><span style={{ position: 'relative', top: '-17px'}}><i class="bi bi-geo-alt"></i></span><span style={{ position: 'relative', top: '-17px'}}>Select Delivery Location</span><span style={{position: 'relative', top: '-17px'}}><i class="bi bi-arrow-right-short"></i></span> </div></div>
        <div style={{ flexGrow: 2 }}></div>
        <div style={{ flexGrow: 2, color: 'white'  }}><i class="bi bi-cart-fill"></i></div>
        <div style={{ flexGrow: 2, color: 'white'}}><i class="bi bi-person-circle"></i></div>
      </div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavDropdown
            title="RAKHI"
            id="basic-nav-dropdown"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            <div
              style={{ display: "flex", flexWrap: "wrap", minWidth: "1000px" }}
            >
              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">
                  <h6>RAKHI COLLECTION</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  All Rakhi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi Bestsellers
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Same Day Delivery
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Premium Rakhi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi gifts for sister
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Single Rakhi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Devotional Rakhi
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3" style={{ background: "#e0e4dc" }}>
                <NavDropdown.Item href="#action/3.1">
                  <h6>RAKHI DOUBLES THE JOY</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Rakhi with Sweets
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi With Chocolates
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi Hampers
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Rakhi With Dryfuits
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi With Flowers
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi Combos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi With Personalised Gifts
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi With Cakes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi With Plants
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi With Mugs
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi With Cushions
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rakhi With Sippers
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">
                  <h6>SEND RAKHI ABROAD</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3" style={{ background: "#e0e4dc" }}>
                <NavDropdown.Item href="#action/3.1">
                  <h6>EXQUISITE RAKHI SETS</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Set of 2 Rakhi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Set of 3 Rakhi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Set of 4 Rakhi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Rakhi Sets
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Family Rakhi Sets
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <h6>RAKHI FOR EVERY BOND</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Bhaiya Bhabhi Rakhi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Kids Rakhi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Sister Rakhi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Brother rakhi
                </NavDropdown.Item>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="BIRTHDAY"
            id="basic-nav-dropdown"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            <div
              style={{ display: "flex", flexWrap: "wrap", minWidth: "1000px" }}
            >
              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">
                  <h6>MUST HAVES</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Flowers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Flowers N Cakes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Plants</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Combos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Gift Hampers
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Personalised Gifts
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Chocolates
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Greeting Cards
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3" style={{ background: "#e0e4dc" }}>
                <NavDropdown.Item href="#action/3.1">
                  <h6>PERSONAL PICKS</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Plant Lover
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wander</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Foodies</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Music Fan
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">
                  <h6>PRICE WISE GIFTS</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Rs500-Rs1000
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Rs1000-Rs2000
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  aboce Rs2000
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Below 500
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3" style={{ background: "#e0e4dc" }}>
                <NavDropdown.Item href="#action/3.1">
                  <h6>TREASURE TROVE</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Spiritual Gift
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Jwellery</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Exotic Flower
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Experiential Gifts
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Toys N games
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Balloon Decor
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Gift N Guitarist
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <img src="images/Header/birthday.webp"></img>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="ANNIVERSARY"
            id="basic-nav-dropdown"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            <div
              style={{ display: "flex", flexWrap: "wrap", minWidth: "1000px" }}
            >
              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="CAKES"
            id="basic-nav-dropdown"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            <div
              style={{ display: "flex", flexWrap: "wrap", minWidth: "1000px" }}
            >
              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="FLOWERS"
            id="basic-nav-dropdown"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            <div
              style={{ display: "flex", flexWrap: "wrap", minWidth: "1000px" }}
            >
              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="PERSONALISED"
            id="basic-nav-dropdown"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            <div
              style={{ display: "flex", flexWrap: "wrap", minWidth: "1000px" }}
            >
              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="PLANTS"
            id="basic-nav-dropdown"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            <div
              style={{ display: "flex", flexWrap: "wrap", minWidth: "1000px" }}
            >
              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="CHOCOLATES"
            id="basic-nav-dropdown"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            <div
              style={{ display: "flex", flexWrap: "wrap", minWidth: "1000px" }}
            >
              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="COMBOS"
            id="basic-nav-dropdown"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            <div
              style={{ display: "flex", flexWrap: "wrap", minWidth: "1000px" }}
            >
              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </div>

              <div className="col-md-3 mb-3">
                <NavDropdown.Item href="#action/3.1">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </div>
            </div>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;