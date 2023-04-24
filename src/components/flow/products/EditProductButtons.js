import React, { useState } from 'react'
import { EditorButtons } from '../../ui/EditorButtons'
import { EditorButton } from '../../ui/EditorButton'
import { DialogConfirm } from '../../ui/DialogConfirm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const EditProductButtons = ({product,name,price,quantity}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const handleUpdate = () => {       
        const newProduct = {id:product.id,name,price,quantity}
        dispatch({type: 'PRODUCTS_UPDATE', payload:newProduct})  
    }

    const handleDeleteBtn = () => {
        setOpenDialog(true)

    }

    const handleDeleteConfirm = () => {       
        dispatch({type: 'PRODUCTS_DELETE', payload:product.id})  
        navigate('/products')
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
                title="Are you sure you want to delete this product?"
                description="This action cannot be undone. Once deleted, the product will be permanently removed from your system."
                btnPositive="Cancel"
                btnNegative="Delete"
            />
        </EditorButtons>
    )
}
