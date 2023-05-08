import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import "../assets/css/pizza.css";

export default function NavComp() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
    const { agregar } = useContext(MyContext);
    const total = agregar.reduce((a, { count, price }) => a + price * count, 0);

    return (
        <Navbar bg="primary" variant="dark">
            <Container className="justify-content-between">
                <NavLink to="/" className={"no-active"}>
                    <Navbar.Brand className="fs-4"> 🍕 Pizzeria Mamma Mia! </Navbar.Brand>
                </NavLink>
                <NavLink to="/carrito" className={setActiveClass}>🛒${total.toLocaleString("es-Cl")}</NavLink>
            </Container>
        </Navbar>
    )
}