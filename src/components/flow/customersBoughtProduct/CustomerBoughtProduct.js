import { MainTableRow } from '../../ui/MainTableRow'


import { CustomerActions } from './CustomerActions';

import { CustomerBoughtProductPurchases } from './CustomerBoughtProductPurchases';

export const CustomerBoughtProduct = ({ customer, product }) => {
   
    const name = customer.firstName + ' ' + customer.lastName

    const purchasesComponent = <CustomerBoughtProductPurchases customer={customer} product={product}/>

    const action = <CustomerActions customer={customer} product={product}/>

    return <MainTableRow col0={name} col1={purchasesComponent} col2={action}/>
}
