
import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function PageNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to='/'> <Navbar.Brand href="#home">
        <img src="https://lh3.googleusercontent.com/proxy/bL3-fBYgtDPvGK6y28UZano-lSMxAryZXPglhI7HGJx8RhTgFYxhAmsMnSPKRMPJZC8BxITkaw6IxmYiVorgftZclA" width="70"
          className="d-inline-block align-top" alt="" />
      </Navbar.Brand></Link>
      <Link to='/order' className="ml-auto"><Button variant="outline-info" >Your Order</Button></Link>

    </Navbar >
  )
}
