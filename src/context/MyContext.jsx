import { createContext, useEffect, useState, useNavigate, useParams } from "react";

export const MyContext = createContext()

const ContextProvider = ({ children }) => {
    // const navigate = useNavigate();
    // const { id } = useParams()
    const [pizzas, setPizzas] = useState([])
    const [agregar, setAgregar] = useState([]);

    const getPizzas = async () => {
        const res = await fetch('/pizzas.json');
        const data = await res.json();
        setPizzas(data)
    }

    useEffect(() => {
        getPizzas();
    }, [])


    // funciones para el carro
    const addToCart = ({ id, price, name, img }) => {
        const productoEncontradoIndex = agregar.findIndex((p) => p.id === id);
        const producto = { id, price, name, img, count: 1 };

        if (productoEncontradoIndex >= 0) {
            agregar[productoEncontradoIndex].count++;
            setAgregar([...agregar]);
        } else {
            setAgregar([...agregar, producto]);
        }
    };

    const incrementar = (i) => {
        agregar[i].count++;
        setAgregar([...agregar]);
    };

    const decrement = (i) => {
        const { count } = agregar[i];
        if (count === 1) {
            agregar.splice(i, 1);
        } else {
            agregar[i].count--;
        }
        setAgregar([...agregar]);
    };

    const globalState = { pizzas, setPizzas, agregar, setAgregar, incrementar, decrement, addToCart }

    return (
        <MyContext.Provider value={globalState}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider;