import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "../../components/Context/DataContext";
import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TemplateComponent from "react-mustache-template-component";
import Link from "next/link";

export default function PortfolioSomePage() {
    const router = useRouter();
    const { id } = router.query;
    const context = useContext(DataContext);

    return (
        <>
            <Header />

            <section className="calculator p_section">
                <div className="p_left">
                    <div className="p_heading">
                        {context.arrayData &&
                            context.arrayData[id] &&
                            context.arrayData[id].title}
                    </div>
                    <div className="p_pub_date">September 25, 2020</div>
                    <div className="p_img">
                        <Image
                            src={
                                context.arrayData &&
                                context.arrayData[id] &&
                                context.arrayData[id].image
                            }
                            width={717}
                            height={350}
                            alt="vasilkoff"
                        />
                    </div>
                    <div className="p_detail">
                        <TemplateComponent
                            template={
                                context.arrayData &&
                                context.arrayData[id] &&
                                context.arrayData[id].html
                            }
                        />
                    </div>

                    <div w3-include-html="portfolioSocialMedia.html"></div>

                    <div className="p_otherLink">
                        <a href="koko-mix-admin.html">
                            <i class="fa-solid fa-circle-left"></i>KOKO-MIX
                            ADMIN
                        </a>
                    </div>
                </div>

                <TemplateComponent
                    template={
                        context.arrayData &&
                        context.arrayData[id] &&
                        context.arrayData[id].trending
                    }
                />
            </section>

            <Footer />
        </>
    );
}
