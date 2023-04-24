import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Actions } from "../../ui/Actions";


import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { CustomerAddProduct } from "./CustomerAddProduct";

export const CustomerActions = ({ customer,product }) => {
    const navigate = useNavigate()

    const [productDialogOpen, setProductDialogOpen] = useState(false)

    const actionEditCustomer = {
        title: 'Edit Customer',
        onClick: () => navigate('/customer/' + customer.id),
        icon: <EditIcon />
    }

    const actionAddProduct = {
        title: 'Add for the customer more product',
        onClick: () => setProductDialogOpen(true),
        icon: <AddIcon />
    }      

    return (
        <>
            <Actions actions={[actionEditCustomer, actionAddProduct]} />
            <CustomerAddProduct customer={customer} open={productDialogOpen} setOpen={setProductDialogOpen} product={product}/>
        </>
        
    )
}
