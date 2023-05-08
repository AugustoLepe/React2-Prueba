import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { Button } from "react-bootstrap";

export default function Carrito() {
    const { agregar, incrementar, decrement } = useContext(MyContext);
    const total = agregar.reduce((a, { count, price }) => a + price * count, 0);

    return (
        <div className="carrito p-5">
            <div className="detalles bg-ligth w-50 m-auto p-5">
                <h3>Detalles del pedido: </h3>
                <div className="p3 bg-white">
                    {agregar.map((producto, i) => (
                        <div key={i} className="d-flex justify-content-between py-2">
                            <div className="d-flex justify-content-between aling-item-center">
                                <img src={producto.img} width="80" alt="" />
                                <h5 className="mb-0 text-capitalize p-2">{producto.name}</h5>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <h5 className="mb-0 p-2 text-success">${(producto.price * producto.count).toLocaleString("es-Cl")}</h5>
                                <Button variant="danger" onClick={() => decrement(i)}>-</Button>
                                <h5 className="mb-0 mx-2">{producto.count}</h5>
                                <Button variant="primary" onClick={() => incrementar(i)}>+</Button>
                            </div>
                        </div>
                    ))}
                    <h3 className="my-4">Total: ${total.toLocaleString("es-Cl")}</h3>
                    <Button variant="success">Ir a pagar</Button>
                </div>
            </div>
        </div>
    )
}
