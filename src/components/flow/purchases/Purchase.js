import { useMemo } from 'react';
import { MainTableRow } from '../../ui/MainTableRow';
import { useSelector } from 'react-redux';
import { findCustomer, findProduct } from '../../../dataHelperFunctions';

export function Purchase({ purchase }) { 
  const products = useSelector(state => state.products)
  const customers = useSelector(state => state.customers)
  
  const product = useMemo(() => findProduct(products,purchase.productID), [products,purchase])
  const customer = useMemo(() => findCustomer(customers,purchase.customerID), [customers,purchase])
  const customerName = customer.firstName + ' ' + customer.lastName;
  return <MainTableRow col0={product.name} col1={customerName} col2={purchase.date} />;
}
