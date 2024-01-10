import { Outlet } from "react-router-dom";
import HeaderNav from "../components/header/HeaderNav";
import HeroBackground from "../pages/home/container/HeroBackground";
import Footer from './../components/footer/Footer';

const MainLayout = () => {
    return (
        <>
            {/* for set back */}
            <HeroBackground/>
            <HeaderNav/>

            <main className="relative">
                <Outlet/>
            </main>
            
            <Footer/>
        </>
    );
};

export default MainLayout;