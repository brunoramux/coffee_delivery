import { ReactNode, createContext, useEffect, useReducer } from "react"
import { produce } from 'immer'


interface CoffeeContextProviderProps {
    children: ReactNode
}

interface Coffee {
    id: string
    image: string
    name: string
    description: string
    value: string
}

interface addCoffeeToCart {
    id: string
    image: string
    name: string
    description: string
    value: string
    quantity: number
}

interface CartState {
    produtos : Coffee[],
}

interface CoffeeContextType {
    addToCart: (data: addCoffeeToCart) => void
}



export const CoffeeContext = createContext({} as CoffeeContextType)






export function CoffeeContextProvider({children,}: CoffeeContextProviderProps){

const [cart, dispatch] = useReducer((state: CartState, action: any) => { 
    if (action.type === 'ADD_TO_CART'){
        return {
            ...state,
            produtos: [...state.produtos, action.payload.data],
        }
    }
    return state    
}, {
    produtos: []
} )

function addToCart(data: addCoffeeToCart){
    dispatch(
        {
            type: 'ADD_TO_CART',
            payload: {
                data,
            }
        }
    )
    console.log(cart)
}



return (
    <CoffeeContext.Provider value={{
        addToCart

    }}>

    {children}
    </CoffeeContext.Provider>


)
}