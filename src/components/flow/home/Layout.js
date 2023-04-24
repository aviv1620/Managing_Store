import { MainLayout } from "../../ui/MainLayout"
import StoreIcon from '@mui/icons-material/Store';

import { Outlet, useLocation, useNavigate } from "react-router-dom";

const pages = ['home', 'products', 'customers','purchases'];

export const Layout = () => {

    const location = useLocation();

    const navigate = useNavigate();
    
    const handleDisableLocationPage = (page) => {
        return page === location.pathname.replace('/', '')
    } 

    const handleNavigationButton = (page) => {
        navigate(page)
    }

    return (
    <MainLayout pages={pages} LogoIcon={StoreIcon} handleDisableLocationPage={handleDisableLocationPage} handleNavigationButton={handleNavigationButton}>
         <Outlet />
    </MainLayout>)
}
