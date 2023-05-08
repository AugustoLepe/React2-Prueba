import { useContext } from "react"
import { Button, Card, Container, Row, Col } from "react-bootstrap"
import { MyContext } from "../context/MyContext"
import { useNavigate } from "react-router-dom"

export default function PizzaCard() {
    const { pizzas } = useContext(MyContext)
    const navigate = useNavigate()

    const goToPizza = (id) => {
        navigate(`/detalle/${id}`)
    }

    return (
        <Container>
            <Row>
                {pizzas ? pizzas.map(pizza =>
                    <Col className="d-flex justify-content-center my-2" md={"3"} key={pizza.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                            <Card.Body>
                                <Card.Title className="text-capitalize fs-3">{pizza.name}</Card.Title>
                                <hr />
                                <Card.Text>
                                    <h6>Ingredientes:</h6>
                                    <ul>
                                        {pizza.ingredients.map((ingredient, i) => <li className="text-capitalize" key={i}>🍕{ingredient}</li>)}
                                    </ul>
                                    <hr />
                                    <p className="fw-bold fs-2 text-center">${pizza.price.toLocaleString('es-Cl')}</p>
                                </Card.Text>
                                {/* <Button variant="primary" onClick={() => setPizzas(pizzas.filter(pizza => pizza.id !== pizza.id))}>Eliminar</Button> */}
                                <div className="d-flex justify-content-around">
                                    <Button variant="info" onClick={() => goToPizza(pizza.id)} >Ver Más 👀</Button>
                                    <Button variant="danger" className="p-1">Añadir 🍕</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ) : "loading"}
            </Row>
        </Container>
    )

}
