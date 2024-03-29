import Image from "next/image";

export default function Reviews() {
    return (
        <>
            <section className="review">
                <div className="review_heading heading ">
                    What our customers say about us
                </div>
                <div className="review_detail review_detail1">
                    <div className="review_ppic">
                        <Image
                            src="/photo_2020-09-25-13.42.31-150x150.jpeg"
                            width={110}
                            height={110}
                            alt="vasilkoff"
                        />
                    </div>
                    <div className="review_right">
                        <div className="review_right_quote">
                            “I have been working with Vasilkoff LTD for a long
                            time now and I am very happy with the
                            professionalism and experience their team has. I
                            strongly recommend them as we build a long lasting
                            relationship based on trust”
                        </div>
                        <div className="review_right_name">Neofytos Siakos</div>
                        <div className="review_right_desig">
                            <a href="https://www.spindealsapp.com/">
                                CEO of Spindeals App
                            </a>
                        </div>
                    </div>
                </div>

                <div className="review_detail review_detail2">
                    <div className="review_ppic">
                        <Image
                            src="/photo_2020-10-07-10.01.38-150x150.jpeg"
                            width={110}
                            height={110}
                            alt="vasilkoff"
                        />
                    </div>
                    <div className="review_right">
                        <div className="review_right_quote">
                            I’ve challenged Vasilkoff several times over the
                            past couple of years with a variety of projects.
                            They have always pulled through for me and gone
                            above and beyond to get the project done. It’s hard
                            to find consistent quality work, Vasilkoff hits the
                            nail on the head, every time. I wish I had found
                            them a couple of years earlier.
                        </div>
                        <div className="review_right_name">Justin Farrell​</div>
                        <div className="review_right_desig">
                            <a href="">CEO of Cowts</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
