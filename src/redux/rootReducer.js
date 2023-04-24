import init from '../dummyJsonHolder'

const initialState = {    
    products: init.products,
    customers:init.customers,
    purchases:init.purchases
}

function reducer(state = initialState, action) {        
    switch (action.type) {       

        case `PRODUCTS_UPDATE`:                           
            return {
                ...state,
                products:state.products.map((product)=> product.id===action.payload.id ? action.payload : product)
            }

        case `PRODUCTS_DELETE`:                               
            return {
                ...state,
                products:state.products.filter((product) => product.id !== action.payload),
                purchases:state.purchases.filter((purchase)=> purchase.productID !== action.payload)
            }      

        case `CUSTOMERS_UPDATE`:           
            return {
                ...state,
                customers:state.customers.map((customer)=> customer.id===action.payload.id ? action.payload : customer)
            }

        case `CUSTOMERS_DELETE`:                   
            return {
                ...state,
                customers:state.customers.filter((customer) => customer.id !== action.payload),
                purchases:state.purchases.filter((purchase)=> purchase.customerID !== action.payload)
            }     

        case `PURCHASES_CREATE`:            
            const newPurchase = {
                ...action.payload,
                id:chooseID(state)
            }
           
            return {
                ...state,
                purchases:[...state.purchases,newPurchase]
            }

        default:
            console.log(`${action.type} action call`)
            return state;
    }
}

function chooseID(state) {    
    return state.purchases.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue.id), 0) + 1
}

export default reducer