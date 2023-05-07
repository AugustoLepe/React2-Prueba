import { createContext, useEffect, useState, useNavigate, useParams } from "react";

export const MyContext = createContext()

const ContextProvider = ({ children }) => {
    // const navigate = useNavigate();
    // const { id } = useParams()
    const [pizzas, setPizzas] = useState([])

    const getPizzas = async () => {
        const res = await fetch('/pizzas.json');
        const data = await res.json();
        setPizzas(data)
    }

    useEffect(() => {
        getPizzas();
    }, [])

    const globalState = { pizzas, setPizzas }

    return (
        <MyContext.Provider value={globalState}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider;