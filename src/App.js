import './App.css'
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom"
import { Layout } from './components/flow/home/Layout'
import { Home } from './components/flow/home/Home'
import { ProductsPage } from './components/flow/products/ProductsPage'
import {EditProduct} from './components/flow/products/EditProduct'
import { CustomersPage } from './components/flow/customer/CustomersPage'
import { PurchasesPage } from './components/flow/purchases/PurchasesPage'
import { EditCustomer } from './components/flow/customer/EditCustomer'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={Layout}>
        <Route path='home' Component={Home} />
        <Route path="products" Component={ProductsPage} />
        <Route path="product/:id" Component={EditProduct} />
        <Route path="customers" Component={CustomersPage} />
        <Route path="customer/:id" Component={EditCustomer} />
        <Route path="purchases" Component={PurchasesPage} />
        <Route index element={<Navigate to="/home" replace={true} />} />
        <Route path="*" element={<div>no page found</div>} />
      </Route>
    </Routes>   
  </BrowserRouter>
}

export default App;
