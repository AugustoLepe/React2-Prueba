import { Navbar, Container } from "react-bootstrap";

export default function NavComp() {

    return (
        <Navbar bg="primary" variant="dark">
            <Container className="justify-content-between">
                <Navbar.Brand className="fs-4"> 🍕 Pizzeria Mamma Mia! </Navbar.Brand>
                <span className="fs-4 text-white">🛒$0</span>
            </Container>
        </Navbar>
    )
}