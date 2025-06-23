import { createContext } from 'react'

// setting default values helps with autocompletion, you still have to set a values
// prop when using the context
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {}
});