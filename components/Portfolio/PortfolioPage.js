import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";

export default function PortfolioPage() {
    const context = useContext(DataContext);

    return (
        <>
            <div className="portfolio_page_heading">Our Work</div>
            <section className="portfolio_page">
                <div className="project_list project_list1">
                    {Object.keys(context.arrayData).map((i, idx) => (
                        <div
                            className="project"
                            data-projectname="Calculator Lock"
                            key={idx}
                        >
                            <Link href={`/portfolio/` + i}>
                                <Image
                                    src={context.arrayData[i].image}
                                    width={472}
                                    height={230}
                                    alt="vasilkoff"
                                />
                            </Link>
                            <div className="title">
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
