import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/css/pizza.css";

export default function NavComp() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");

    return (
        <Navbar bg="primary" variant="dark">
            <Container className="justify-content-between">
                <NavLink to="/" className={"no-active"}>
                    <Navbar.Brand className="fs-4"> 🍕 Pizzeria Mamma Mia! </Navbar.Brand>
                </NavLink>
                <NavLink to="/carrito" className={setActiveClass}>🛒$0</NavLink>
            </Container>
        </Navbar>
    )
}