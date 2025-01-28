import { Outlet, useLocation } from 'react-router-dom'
import Landingnavbar from '../components/Landingnavbar'
import Landingpage from './Landingpage';

const Layout = () => {

    const location = useLocation();

    return (
        <>
            <Landingnavbar />
            {location.pathname === "/" && <Landingpage />}
            <Outlet />
        </>
    )
}

export default Layout