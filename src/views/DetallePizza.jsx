import { useContext, useEffect, useState } from "react"
import { MyContext } from "../context/MyContext"
import { Button, Card, Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"

export default function DetallePizza() {

    const [detallePizza, setDetallePizza] = useState({})
    const { pizzas, setPizzas } = useContext(MyContext)
    const { id } = useParams()

    const getDetallePizza = () => {
        const pizzaData = pizzas.find((pizza) => pizza.id === id)
        setDetallePizza(pizzaData)
    }

    useEffect(() => {
        getDetallePizza()
    }, [pizzas])

    return (
        <Container className="d-flex justify-content-center">
            <Card style={{ width: '80rem' }} className="mt-5">
                <Card.Body>
                    <Row>
                        <Col className="d-flex justify-content-center my-2"><img src={detallePizza.img} alt={detallePizza.name}></img></Col>
                        <Col className="my-5">
                            <h1 className="text-capitalize">{detallePizza.name}</h1>
                            <hr />
                            <Card.Text>
                                {detallePizza.desc}
                                <h6 className="mt-3">Ingredientes:</h6>
                                <ul>
                                    {detallePizza.ingredients?.map((ingredient, i) => <li className="text-capitalize" key={i}>🍕{ingredient}</li>)}
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <p className="fw-bold fs-2">Precio: ${detallePizza.price?.toLocaleString('es-Cl')}</p>
                                    <Button variant="danger">Añadir 🛒</Button>
                                </div>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
