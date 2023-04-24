

import { PageTitle } from '../../ui/PageTitle';
import { Page } from '../../ui/Page';
import { CustomersBoughtProduct } from '../customersBoughtProduct/CustomersBoughtProduct';

export const CustomersPage = () => {

  return (
    <Page>
      <PageTitle title='Customers' />      
      <CustomersBoughtProduct/>
    </Page>
  )
}