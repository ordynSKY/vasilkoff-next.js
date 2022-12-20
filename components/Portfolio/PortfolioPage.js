import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
    const array = [
        {
            image: "/Group-1198-300x146.png",
            title: "Calculator Lock",
            details:
                "Calculator vault is a great privacy protection application to easily hide photos and videos you don’t want others to see on your Android device. Hide",
            id: 1,
        },
        {
            image: "/Screenshot-2020-09-25-at-3.26.37-PM-1024x508.png",
            title: "KOKO-MIX ADMIN",
            details:
                "KOKOMIX was founded on September 1996 by George and Theodoros Chatzigiannakou. A small production unit that produces and delivers ready-mix concrete in the area of",
            id: 2,
        },
        {
            image: "/Screenshot-2020-09-23-at-2.06.49-PM-1024x691.png",
            title: "SMRTSGN",
            details:
                "What do we do SmrtSgn is a regtech startup which can help effectively regulate the markets of Virtual currencies (according to AMLD5) and Decentralized Securities",
            id: 3,
        },
        {
            image: "/Screenshot-2020-09-25-at-3.19.07-PM-1024x501.png",
            title: "SMRT16",
            details:
                "What do we do SmrtSgn is a regtech startup which can help effectively regulate the markets of Virtual currencies (according to AMLD5) and Decentralized Securities",
            id: 4,
        },
    ];

    console.log(array);

    return (
        <>
            <div className="portfolio_page_heading">Our Work</div>
            <section className="portfolio_page">
                <div className="project_list project_list1">
                    {array.map((i) => (
                        <div
                            className="project"
                            data-projectName="Calculator Lock"
                            key={i.id}
                        >
                            <a href="calculator-lock.html">
                                <Image
                                    src={i.image}
                                    width={472}
                                    height={230}
                                    alt="vasilkoff"
                                />
                            </a>
                            <div className="title">{i.title}</div>
                            <div className="detail">{i.details}</div>
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
