import AboutUs from "../components/AboutUs/AboutUs";
import Cards from "../components/Cards/Cards";
import ContactCard from "../components/ContactCard/ContactCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PriceCards from "../components/PriceCards/PriceCards";
import Prices from "../components/Prices/Prices";
import Projects from "../components/Projects/Projects";
import Reviews from "../components/Reviews/Reviews";
import Section from "../components/Section/Section";

export default function Home() {
    return (
        <>
            <Header />

            <Section />

            <Cards />

            <AboutUs />

            <Projects />

            <Prices />

            <PriceCards />

            <ContactCard />

            <Reviews />

            <Footer />
        </>
    );
}
