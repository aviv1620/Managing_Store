import { useSelector } from 'react-redux'
import { CardItems } from '../../ui/CardItems'
import { Product } from './Product'
import { useMemo } from 'react'
import { calculatePriceOfProduct, convertPurchasesToProducts } from '../../../dataHelperFunctions'


export const ProductsPage = () => {

  const purchases = useSelector(state => state.purchases)
  const products = useSelector(state => state.products)

  const total = useMemo(() => {   
    let ans = convertPurchasesToProducts(purchases,products)
    ans = calculatePriceOfProduct(ans)
    ans = ans.toFixed(2);
    return ans
  }, [purchases,products])
  
  const properties = [{label:'Total',value:`${total} $`}]

  return (
    <CardItems title="Products" properties={properties}>
      {products.map((product)=><Product key={product.id} product={product}/>)}
    </CardItems>
  )
}