import React from "react";
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
  Badge,
} from "react-bootstrap";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{ padding: "8px" }}>
      <Container>
        <Navbar.Brand>
          <Link className={styles.brandName} to='/'>
            Shopping Bazzaar
          </Link>
        </Navbar.Brand>
        <Navbar.Text>
          <FormControl
            style={{ width: "500px" }}
            placeholder='Search a product'
            className='m-auto'
          ></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown align={"end"}>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart size={"25px"} />
              <Badge className={styles.cartCount} bg='transparent'>
                {10}
              </Badge>
            </Dropdown.Toggle>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
