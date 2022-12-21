import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../components/Context/DataContext";
import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TemplateComponent from "react-mustache-template-component";
import moment from "moment";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function PortfolioSomePage() {
    const router = useRouter();
    const { id } = router.query;
    const context = useContext(DataContext);

    return (
        <>
            <Header />

            <section class="calculator p_section">
                <div class="p_left">
                    <div class="p_heading">
                        {context.arrayData &&
                            context.arrayData[id] &&
                            context.arrayData[id].title}
                    </div>
                    <div class="p_pub_date">September 25, 2020</div>
                    <div class="p_img">
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
                    <div class="p_detail">
                        <TemplateComponent
                            template={
                                context.arrayData &&
                                context.arrayData[id] &&
                                context.arrayData[id].html
                            }
                        />
                    </div>

                    <div w3-include-html="portfolioSocialMedia.html"></div>

                    <div class="p_otherLink">
                        <a href="koko-mix-admin.html">
                            {" "}
                            <i class="fa-solid fa-circle-left"></i>KOKO-MIX
                            ADMIN
                        </a>
                    </div>
                </div>

                <div w3-include-html="trending.html"></div>
            </section>

            <Footer />
        </>
    );
}
