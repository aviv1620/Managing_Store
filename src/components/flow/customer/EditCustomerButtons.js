import { useState } from 'react'
import { EditorButton } from '../../ui/EditorButton'
import { EditorButtons } from '../../ui/EditorButtons'
import { DialogConfirm } from '../../ui/DialogConfirm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export const EditCustomerButtons = ({ customer, firstName, lastName, city }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = () => {        
        const newCustomer = {id:customer.id,firstName,lastName,city}
        dispatch({type: 'CUSTOMERS_UPDATE', payload:newCustomer})  

    }

    const handleDeleteBtn = () => {
        setOpenDialog(true)

    }

    const handleDeleteConfirm = () => {
        dispatch({type: 'CUSTOMERS_DELETE', payload:customer.id})  
        navigate('/customers')
    }

    const [openDialog, setOpenDialog] = useState(false)

    return (
        <EditorButtons>
            <EditorButton onClick={handleUpdate} label='Update' />
            <EditorButton onClick={handleDeleteBtn} color='warning' label='Delete' />
            <DialogConfirm
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                handleBtnPositive={() => setOpenDialog(false)}
                handleBtnNegative={handleDeleteConfirm}
                title="Are you sure you want to delete this customer?"
                description="This action cannot be undone. Once deleted, the customer will be permanently removed from your system."
                btnPositive="Cancel"
                btnNegative="Delete"
            />
        </EditorButtons>
    )
}
