import React from 'react';
import useState from 'react';
import './css/Navbar.css';
import { Button, Navbar, Container, Nav, FormControl, Form, InputGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//https://remotestack.io/react-local-storage-tutorial-store-form-state-in-localstorage/
function NavBar() {
  return (
   <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><h1>NYC Housing Data</h1></a>

			
    </div>
    <ul class="nav navbar-nav">
    </ul>
  </div>
</nav>
  );
};
export default NavBar;