import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { CardItem } from "../../ui/CardItem";
import { CustomersBoughtProduct } from "../customersBoughtProduct/CustomersBoughtProduct";

export const Product = ({ product }) => {

    const navigate = useNavigate();

    const properties = [
        {label:'name',value:product.name},
        {label:'price',value:product.price + ' $'},
        {label:'quantity',value:product.quantity},
    ]

    const handleAction = () => {
        navigate('/product/'+product.id)
    }

    const action = {
        title:'Edit Product',
        onClick:handleAction,
        icon:<EditIcon />
    }

  return (
    <CardItem properties={properties} action={action}>
        <CustomersBoughtProduct product={product}/>
    </CardItem>
  )
}