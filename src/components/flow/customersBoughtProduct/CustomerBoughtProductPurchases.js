import Shop2Icon from '@mui/icons-material/Shop2';
import { BackdropListItem } from '../../ui/BackdropListItem';
import { BackdropAction } from '../../ui/BackdropAction';
import { BackdropList } from '../../ui/BackdropList';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { addProductNameToMyPurchases, filterMyPurchasesByCustomer, filterMyPurchasesByProduct } from '../../../dataHelperFunctions';

export function CustomerBoughtProductPurchases({ customer, product }) {
    const purchases = useSelector(state => state.purchases)
    const products = useSelector(state => state.products)

    const navigate = useNavigate()

    const myPurchases = useMemo(() => {
        let myPurchases = purchases
        
        myPurchases = filterMyPurchasesByCustomer(myPurchases,customer.id)
        
        if(product)
            myPurchases = filterMyPurchasesByProduct(myPurchases,product.id)

        myPurchases = addProductNameToMyPurchases(myPurchases,products)

        return myPurchases
    },[customer.id,product,products,purchases])

    const handleNavigate = () => {
        const param = new URLSearchParams()

        if(product)
            param.set('productID',product.id)

        param.set('customerID',customer.id)

        navigate(`/purchases?${param.toString()}`)
    }

    return (
        <BackdropList badgeContent={myPurchases.length} label='Purchases'>
            <BackdropAction label='Click to View On Purchases Page' icon={<Shop2Icon />} onClick={handleNavigate} />
            {myPurchases.map((purchase) => <BackdropListItem key={purchase.id} label1={purchase.productName} label2={purchase.date} />)}

        </BackdropList>);

}
