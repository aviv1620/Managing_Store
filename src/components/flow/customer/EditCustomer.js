import {useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';

import { EditCustomerButtons } from './EditCustomerButtons';
import { EditCustomerPurchasedProducts } from './EditCustomerPurchasedProducts';

import { Page } from '../../ui/Page';
import { Editor } from '../../ui/Editor';
import { Field } from '../../ui/Field';

import {validateByRegex} from '../../../validateTools'
import { PageTitle } from '../../ui/PageTitle';
import { useSelector } from 'react-redux';
import { findCustomer } from '../../../dataHelperFunctions';

export const EditCustomer = () => {
  const customers = useSelector(state => state.customers)
  
  const { id } = useParams(); 
  const customer =  useMemo(() => findCustomer(customers,id), [customers,id])

  const invalidText = 'character and space.'
  const validRegex = /^([\w\s]*)$/

  const [firstName, setFirstName] = useState(customer.firstName)
  const isValidFirstName = validateByRegex(validRegex,firstName)  

  const [lastName, setLastName] = useState(customer.lastName)
  const isValidLestName = validateByRegex(validRegex,lastName)  

  const [city, setCity] = useState(customer.city)
  const isValidCity = validateByRegex(validRegex,city)  

  return (
    <Page>
      <PageTitle title='Edit Customer'/>
      <Editor>
        <Field label='firstName' setValue={setFirstName} value={firstName} invalidValueText={invalidText}  isValidValue={isValidFirstName}/>
        <Field label='lastName' setValue={setLastName} value={lastName} invalidValueText={invalidText} isValidValue={isValidLestName}/>
        <Field label='city' setValue={setCity} value={city} invalidValueText={invalidText} isValidValue={isValidCity}/>
        <EditCustomerButtons customer={customer} firstName={firstName} lastName={lastName} city={city}/>               
      </Editor>
      <EditCustomerPurchasedProducts customer={customer}/> 
    </Page>
  )
}