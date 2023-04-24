import { useNavigate } from 'react-router-dom';

import { EditableListItems } from '../../ui/EditableListItems';
import { EditableListItem } from '../../ui/EditableListItem';
import { NoDataInCard } from '../../ui/NoDataInCard';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { convertPurchasesToProducts, filterMyPurchasesByCustomer, removeDuplicate } from '../../../dataHelperFunctions';


export const EditCustomerPurchasedProducts = ({ customer }) => {
    const navigate = useNavigate()
    
    const products = useSelector(state => state.products)
    const purchases =useSelector(state => state.purchases)    

    const purchasedProducts = useMemo(() => {
        let purchasedProducts = filterMyPurchasesByCustomer(purchases,customer.id)
        purchasedProducts = convertPurchasesToProducts(purchasedProducts,products)
        purchasedProducts = removeDuplicate(purchasedProducts)
        return purchasedProducts
    }
    ,[purchases,products,customer])      

    if (purchasedProducts.length <= 0) {
        const title = 'This customer not buy any product yet.'

        return <NoDataInCard title={title} />
    }
    
    return (
        <EditableListItems label='Purchased Products'>            
            {purchasedProducts.map((product) =>
                <EditableListItem key={product.id} label1={product.name} onClick={() => navigate(`/product/${product.id}`)} />
            )}
        </EditableListItems>
    )
}