import Link from "next/link";
import Image from "next/image";
import { db } from "../../firebase";
import { getDoc, getDocs, collection, doc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContext";

export default function PortfolioPage() {
    const [responseData, setResponseData] = useState([]);
    const context = useContext(DataContext);

    useEffect(() => {
        console.log("context", context);
    }, []);

    console.log("arrayContext", context.arrayData);

    return (
        <>
            <div className="portfolio_page_heading">Our Work</div>
            <section className="portfolio_page">
                <div className="project_list project_list1">
                    {Object.keys(context.arrayData).map((i, idx) => (
                        <div
                            className="project"
                            data-projectName="Calculator Lock"
                            key={idx}
                        >
                            <a href={`/portfolio/` + i}>
                                <Image
                                    src={context.arrayData[i].image}
                                    width={472}
                                    height={230}
                                    alt="vasilkoff"
                                />
                            </a>
                            <div contentEditable="true" className="title">
                                {context.arrayData[i].title}
                            </div>
                            <div className="detail">
                                {context.arrayData[i].details}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pageno_list">
                    <Link href="portfolio.html" className="active">
                        1
                    </Link>
                    <Link href="portfolio2.html">2</Link>
                    <Link href="portfolio3.html">3</Link>
                    <Link href="portfolio4.html">4</Link>
                </div>
            </section>
        </>
    );
}
