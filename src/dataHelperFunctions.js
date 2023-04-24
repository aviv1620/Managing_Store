function convertPurchasesToProducts(purchases,products){
    return purchases.map((pur) => products.find((pro) => pur.productID === pro.id))
}

function filterMyPurchasesByCustomer(purchases,customerID){ 
    return purchases.filter((p) => p.customerID === customerID)
}

function filterMyPurchasesByProduct(purchases,productID){
    return purchases.filter((p) => p.productID === productID)
}

function filterCustomersFromPurchases(customers,purchases){
    return customers.filter((customer) =>  findPurchaseByCustomerID(purchases,customer.id))
}

function addProductNameToMyPurchases(purchases,products){
    return purchases.map((purchase) => {
        return {
            ...purchase,
            productName: products.find((product) => product.id === purchase.productID).name,
        };
    } )
}

function removeDuplicate(items){
    return items.sort((a,b)=> a.id<b.id).reduce((accumulator, currentValue)=>currentValue === accumulator[accumulator.length - 1] ? accumulator : [...accumulator,currentValue],[]);
} 

function findCustomer(customers,id){
    return customers.find((c) => c.id === +id)
}

function findProduct(products,id){
    return products.find((product) => product.id === +id)
}

function findPurchaseByCustomerID(purchases,CustomerID){
    return purchases.find((purchase) => purchase.customerID === CustomerID)
}

function convertProductsToComboboxFormat(products) {
    return products.map((product) => convertProductToComboboxFormat(product));
}

function convertCustomersToComboboxFormat(customers) {
    return customers.map((customer)=>convertCustomerToComboboxFormat(customer))
}


function convertProductToComboboxFormat(product) {
    return { id: product.id, label: product.name };
}  

function convertCustomerToComboboxFormat(customer) {
    return{label:customer.firstName + ' ' + customer.lastName,id:customer.id}
}

function calculatePriceOfProduct(products){
    return products.reduce((accumulator, product)=>accumulator+product.price,0)
}

export {
    convertPurchasesToProducts,
    filterMyPurchasesByCustomer,
    filterMyPurchasesByProduct,
    removeDuplicate,
    findCustomer,
    findProduct,
    convertProductToComboboxFormat,
    convertCustomerToComboboxFormat,
    convertProductsToComboboxFormat,
    convertCustomersToComboboxFormat,
    addProductNameToMyPurchases,
    findPurchaseByCustomerID,
    filterCustomersFromPurchases,
    calculatePriceOfProduct
}