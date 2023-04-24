import { useMemo, useState } from 'react'
import { Page } from '../../ui/Page'
import { Editor } from '../../ui/Editor'
import { Combobox } from '../../ui/Combobox'
import { MyDatePicker } from '../../ui/MyDatePicker'
import { EditorButton } from '../../ui/EditorButton'
import { EditorButtons } from '../../ui/EditorButtons'

import { Purchases } from './Purchases'
import dayjs from 'dayjs'
import { PageTitle } from '../../ui/PageTitle'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { convertCustomersToComboboxFormat, convertProductsToComboboxFormat } from '../../../dataHelperFunctions'

export const PurchasesPage = () => {
  const purchases = useSelector(state => state.purchases)
  const products = useSelector(state => state.products)
  const customers = useSelector(state => state.customers)

  const myProducts = useMemo( ()=> convertProductsToComboboxFormat(products) ,[products])
  const myCustomers = useMemo( ()=> convertCustomersToComboboxFormat(customers),[customers])
   
  const [product,setProduct] = useMemoSearchParamsID(myProducts,'productID')
  const [customer,setCustomer] = useMemoSearchParamsID(myCustomers,'customerID')
  const [date, setDate] = useDayJsSearchParams('date')  
  
  const [myPurchases, setMyPurchases] = useState(null) 

  const handleSearchBtn = () => {
    let purchasesFiltered = purchases
    
    if(product)
      purchasesFiltered = purchasesFiltered.filter((purchase)=>purchase.productID === product.id)

    if(customer)
      purchasesFiltered = purchasesFiltered.filter((purchase)=>purchase.customerID === customer.id)

    if(date)
      purchasesFiltered = purchasesFiltered.filter((purchase)=>dayjs(purchase.date).isSame(date,'day'))

    setMyPurchases(purchasesFiltered)
  }

  return (
    <Page>
      <PageTitle title={'Purchases'}/>
      <Editor>
        <Combobox setValue={setProduct} label={'products'} options={myProducts} value={product}/>
        <Combobox setValue={setCustomer} label={'customers'} options={myCustomers} value={customer}/>        
        <MyDatePicker value={date} setValue={setDate}/>
        <EditorButtons>
          <EditorButton onClick={handleSearchBtn} label='Search' />  
        </EditorButtons>              
      </Editor>
      <Purchases purchases={myPurchases}/>    
    </Page>
  )
}

//my custom hook that hold date in URL Params, and return the DayJs it value.
function useDayJsSearchParams(name) {
  const [URLSearchParams, setSearchParams] = useSearchParams();

  const dateStr = URLSearchParams.get(name)

  const dayJs = dateStr ? dayjs(dateStr, 'YYYY-MM-DD') : null

  const setDayJs = (newDayJs) => {

    if (newDayJs)
      URLSearchParams.set(name, newDayJs.format('YYYY-MM-DD'))
    else
      URLSearchParams.delete(name)

    setSearchParams(URLSearchParams)
  }

  return [dayJs, setDayJs]
}

//my custom hook that hold ID from collection in combobox format in URL Params, and return the item it value.
function useMemoSearchParamsID(items, name) {
  const [URLSearchParams, setSearchParams] = useSearchParams();

  const itemID = URLSearchParams.get(name)

  const item = useMemo(() => {

    const itemIndex = items.findIndex((item) => item.id === +itemID)

    return itemIndex === -1 ? null : items[itemIndex]

  }, [itemID, items]);

  const setItem = (item) => {

    URLSearchParams.set(name, item ? item.id : 'null')

    if (item)
      URLSearchParams.set(name, item.id)
    else
      URLSearchParams.delete(name)

    setSearchParams(URLSearchParams)
  }

  return [item, setItem]
}