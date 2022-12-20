import Image from "next/image";

export default function PriceCards() {
    return (
        <>
            <section className="pricesCards reveal">
                <div className="pcard">
                    <div className="pcard_head">Website Development</div>
                    <div className="pcard_para">
                        When it comes to website development, we create
                        effective and understandable complex systems.
                    </div>
                    <div className="pcard_hilight">From 990 €</div>
                    <div className="pcard_pic1 pcard_pic">
                        <a href="https://www.abetterflorist.com/">
                            <Image
                                src="/Screenshot-2020-09-22-at-12.52.23-PM-1536x765.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                    <div className="pcard_line"></div>
                    <div className="pcard_pic2 pcard_pic">
                        <a href="https://www.inter-euro.com/">
                            <Image
                                src="/Screenshot-2020-09-22-at-12.53.50-PM-768x389.png"
                                width={201}
                                height={99}
                            />
                        </a>{" "}
                    </div>
                </div>

                <div className="pcard">
                    <div className="pcard_head">Website & Web Applications</div>
                    <div className="pcard_para">
                        In this package you will have a website and Android &
                        IOS applications. It is perfect for small businesses.
                    </div>
                    <div className="pcard_hilight">From 1990€</div>
                    <div className="pcard_pic1 pcard_pic">
                        <a href="https://nutribar.vasilkoff.info/">
                            <Image
                                src="/Screenshot-2020-09-23-at-12.31.19-PM-1024x567.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                    <div className="pcard_line"></div>
                    <div className="pcard_pic2 pcard_pic">
                        <a href="https://housekeeperworld.com/en/">
                            <Image
                                src="/Screenshot-2020-09-25-at-12.37.15-PM-1024x620.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                </div>

                <div className="pcard">
                    <div className="pcard_head">Mobile Apps Development</div>
                    <div className="pcard_para">
                        Do it native or cross-platform apps we optimise the code
                        of your app compliant with the latest technological
                        standards.
                    </div>
                    <div className="pcard_hilight">
                        From 2490€ for each platform
                        <br /> From 3490€ for cross platform
                    </div>
                    <div className="pcard_pic1 pcard_pic">
                        <a href="https://votemee.com/">
                            <Image
                                src="/Screenshot-2020-09-22-at-12.59.53-PM-1024x525.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                    <div className="pcard_line"></div>
                    <div className="pcard_pic2 pcard_pic">
                        <a href="https://www.spindealsapp.com/">
                            <Image
                                src="/Screenshot-2020-09-22-at-1.02.22-PM-1024x491.png"
                                width={201}
                                height={99}
                            />
                        </a>{" "}
                    </div>
                </div>

                <div className="pcard">
                    <div className="pcard_head">
                        Blockchain
                        <br /> Services
                    </div>
                    <div className="pcard_para">
                        We are developing from crypto wallets, cryptocurrency
                        exchange or stocks exchange to online payment systems.
                    </div>
                    <div className="pcard_hilight">From 2159 €</div>
                    <div className="pcard_pic1 pcard_pic">
                        <a href="https://coinagewallet.com/">
                            <Image
                                src="/Screenshot-2020-09-23-at-12.43.58-PM-1536x887.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                    <div className="pcard_line"></div>
                    <div className="pcard_pic2 pcard_pic">
                        <a href="https://garantex.io/">
                            <Image
                                src="/Screenshot-2020-09-23-at-12.43.41-PM-1536x775.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                </div>
            </section>

            {/* <section className="pricesCards">
                <div className="pcard">
                    <div className="pcard_head">Website Development</div>
                    <div className="pcard_para">
                        When it comes to website development, we create
                        effective and understandable complex systems.
                    </div>
                    <div className="pcard_hilight">From 990 €</div>
                    <div className="pcard_pic1 pcard_pic">
                        <a href="https://www.abetterflorist.com/">
                            <Image
                                src="/Screenshot-2020-09-22-at-12.52.23-PM-1536x765.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                    <div className="pcard_line"></div>
                    <div className="pcard_pic2 pcard_pic">
                        <a href="https://www.inter-euro.com/">
                            <Image
                                src="/Screenshot-2020-09-22-at-12.53.50-PM-768x389.png"
                                width={201}
                                height={99}
                            />
                        </a>{" "}
                    </div>
                </div>

                <div className="pcard">
                    <div className="pcard_head">Website & Web Applications</div>
                    <div className="pcard_para">
                        In this package you will have a website and Android &
                        IOS applications. It is perfect for small businesses.
                    </div>
                    <div className="pcard_hilight">From 1990€</div>
                    <div className="pcard_pic1 pcard_pic">
                        <a href="https://nutribar.vasilkoff.info/">
                            <Image
                                src="/Screenshot-2020-09-23-at-12.31.19-PM-1024x567.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                    <div className="pcard_line"></div>
                    <div className="pcard_pic2 pcard_pic">
                        <a href="https://housekeeperworld.com/en/">
                            <Image
                                src="/Screenshot-2020-09-25-at-12.37.15-PM-1024x620.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                </div>

                <div className="pcard">
                    <div className="pcard_head">Mobile Apps Development</div>
                    <div className="pcard_para">
                        Do it native or cross-platform apps we optimise the code
                        of your app compliant with the latest technological
                        standards.
                    </div>
                    <div className="pcard_hilight">
                        From 2490€ for each platform
                        <br /> From 3490€ for cross platform
                    </div>
                    <div className="pcard_pic1 pcard_pic">
                        <a href="https://votemee.com/">
                            <Image
                                src="/Screenshot-2020-09-22-at-12.59.53-PM-1024x525.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                    <div className="pcard_line"></div>
                    <div className="pcard_pic2 pcard_pic">
                        <a href="https://www.spindealsapp.com/">
                            <Image
                                src="/Screenshot-2020-09-22-at-1.02.22-PM-1024x491.png"
                                width={201}
                                height={99}
                            />
                        </a>{" "}
                    </div>
                </div>

                <div className="pcard">
                    <div className="pcard_head">
                        Blockchain
                        <br /> Services
                    </div>
                    <div className="pcard_para">
                        We are developing from crypto wallets, cryptocurrency
                        exchange or stocks exchange to online payment systems.
                    </div>
                    <div className="pcard_hilight">From 2159 €</div>
                    <div className="pcard_pic1 pcard_pic">
                        <a href="https://coinagewallet.com/">
                            <Image
                                src="/Screenshot-2020-09-23-at-12.43.58-PM-1536x887.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                    <div className="pcard_line"></div>
                    <div className="pcard_pic2 pcard_pic">
                        <a href="https://garantex.io/">
                            <Image
                                src="/Screenshot-2020-09-23-at-12.43.41-PM-1536x775.png"
                                width={201}
                                height={99}
                            />
                        </a>
                    </div>
                </div>
            </section> */}
        </>
    );
}
