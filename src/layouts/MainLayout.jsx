import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <HeaderNav/>
            {/* <Outlet/>
            <Footer/> */}
        </div>
    );
};

export default MainLayout;