import Image from "next/image";

export default function Page() {
    return (
        <>
            <section id="about">
                <div className=" about_section">
                    <div className="aleft_col fade-right-half">
                        <Image
                            className="about_img"
                            src="/IMG_9858-1.png"
                            width={540}
                            height={360}
                            alt="vasilkoff"
                        />
                    </div>
                    <div className="aright_col">
                        <div className="about_heading sub-head fade-up-header">
                            About us
                        </div>
                        <div className="fade-up">
                            <div className="about_para sub-para">
                                In particular we love to develop native iOS and
                                Android apps. We know how to build advanced
                                WordPress websites. If you are ready to start an
                                e-commerce project, we have a lot of experience
                                with the past and ongoing projects using
                                Magneto, Shopify and WooCommerce. We know the
                                difference and can advise what can suit you
                                better.
                            </div>
                            <div className="about_btn">
                                <a href="#">More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
