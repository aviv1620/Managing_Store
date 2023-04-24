import { useMemo, useState } from 'react';
import { DialogCombobox } from "../../ui/DialogCombobox"
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { convertProductToComboboxFormat, convertProductsToComboboxFormat } from '../../../dataHelperFunctions';


export const CustomerAddProduct = ({customer,open,setOpen,product:productProp}) => {   
    const initProductState = productProp ? convertProductToComboboxFormat(productProp) : null   
    const [product, setProduct] = useState(initProductState)

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const options = useMemo(()=>convertProductsToComboboxFormat(products),[products])
    const title = 'Add Product'
    const explanation = `To add product to ${customer.firstName} ${customer.lastName} place select product and then click save.`
    const handleClose = () =>setOpen(false)
    const handleSave = () => {
        if(product){
         
          const newPurchase = {
            customerID:customer.id,
            productID:product.id,
            date:dayjs().format('YYYY-MM-DD')
          }

          dispatch({type: 'PURCHASES_CREATE', payload:newPurchase})                  

        }else

          console.log('not select product')

        handleClose()
    }

  return (
    <DialogCombobox isOpen={open} options={options} title={title} explanation={explanation} setValue={setProduct} value={product} handleClose={handleClose} handleSave={handleSave}/>
  )
}

