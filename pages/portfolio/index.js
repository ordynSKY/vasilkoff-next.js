import { useContext } from "react";
import DataProvider from "../../components/Context/DataContext";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PortfolioPage from "../../components/Portfolio/PortfolioPage";

export default function Portfolio() {
    return (
        <>
            <Header />

            <PortfolioPage />

            <Footer />
        </>
    );
}
