import { useParams } from 'react-router-dom';
import { CustomersBoughtProduct } from '../customersBoughtProduct/CustomersBoughtProduct';
import { useMemo, useState } from 'react';
import {validateByRegex} from '../../../validateTools'

import { Editor } from '../../ui/Editor';
import { Field } from '../../ui/Field';
import { Page } from '../../ui/Page';
import { EditProductButtons } from './EditProductButtons';
import { PageTitle } from '../../ui/PageTitle';
import { useSelector } from 'react-redux';
import { findProduct } from '../../../dataHelperFunctions';

export const EditProduct = () => {
  const products = useSelector(state => state.products)
  const { id } = useParams();
  
  const product =  useMemo(() => findProduct(products,id), [products,id]) 

  //Fields
  const [price, setPrice] = useState(product.price)    
  const invalidPriceText = 'number, Up to two digit after decimal point. optionally to type the dollar($) symbol.'
  const isValidPrice = validateByRegex(/^([0-9]*\.?[0-9]{0,2})\$?$/,price)
  
  const [name, setName] = useState(product.name)
  const invalidNameText = 'character and space.'
  const isValidName = validateByRegex(/^([\w\s]*)$/,name)  
  
  const [quantity, setQuantity] = useState(product.quantity)
  const invalidQuantityText = 'only natural numbers.'
  const isValidQuantity  = validateByRegex(/^(\d*)$/,quantity)
     
  return (
    <Page>
      <PageTitle title='Edit Product'/>
      <Editor>
        <Field label='name' setValue={setName} value={name} isValidValue={isValidName} invalidValueText={invalidNameText}/>
        <Field label='price' setValue={setPrice} value={price} isValidValue={isValidPrice} invalidValueText={invalidPriceText} adornment='$'/>
        <Field label='quantity' setValue={setQuantity} value={quantity} isValidValue={isValidQuantity} invalidValueText={invalidQuantityText}/>
        <EditProductButtons product={product} name={name} price={price} quantity={quantity}/>        
      </Editor>
      <CustomersBoughtProduct product={product}/>
      
    </Page>
  )
}