import { NoDataInCard } from '../../ui/NoDataInCard'
import { MainTableCollapseOnMobile } from '../../ui/MainTableCollapseOnMobile'
import { CustomerBoughtProduct } from './CustomerBoughtProduct'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { filterCustomersFromPurchases, filterMyPurchasesByProduct } from '../../../dataHelperFunctions'

export const CustomersBoughtProduct = ({ product }) => {
    const purchases = useSelector(state => state.purchases)
    const customers = useSelector(state => state.customers)

    const myPurchases = useMemo(() => {
        if (!product)
            return purchases
        else
            return filterMyPurchasesByProduct(purchases, product.id)
    }, [product, purchases])

    const myCustomers = useMemo(() => {
        if (!product)
            return customers
        else
            return filterCustomersFromPurchases(customers, myPurchases)
    }, [product, customers, myPurchases])

    
    if (myCustomers.length <= 0) {
        const title = 'no customer buy this product yet.'

        return <NoDataInCard title={title} />

    } else {
        const head = {
            col0: 'Name',
            col1: 'Purchases',
            col2: 'Action',
        }        

        return (
        <MainTableCollapseOnMobile ariaLabel="customers buy product table" head={head}>
            {myCustomers.map((customer)=><CustomerBoughtProduct key={customer.id} customer={customer} product={product}/>)}
        </MainTableCollapseOnMobile>)
            
    }




}
