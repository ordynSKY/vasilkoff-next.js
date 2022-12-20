import Image from "next/image";

export default function Details() {
    return (
        <>
            <section className="about_detail">
                <div className="heading fade-up-header reveal">
                    Collaborate. Build. Succeed.
                </div>

                <div className=" about_section fade-opacticy">
                    <div className="aright_col about_detail_aright_col">
                        <div className="about_heading sub-head">
                            Get to Know Us
                        </div>
                        <div className="about_para sub-para">
                            We love Open Source, it gives you fast, effective
                            and robust solutions. But sometimes you need
                            absolutely custom development. That’s ok, we will
                            recognise such a situations and advise on most
                            suitable technology stack.
                            <br />
                            <br />
                            Also, we are passionate about blockchain.
                            <br />
                            <br />
                            We love what we do and we know how to get things
                            done.
                        </div>
                        <div className="about_btn">
                            <a href="index.html#map">Contact Us</a>
                        </div>
                    </div>
                    <div
                        className="aleft_col"
                        data-tilt
                        data-tilt-reverse="true"
                        data-tilt-max="3"
                        data-tilt-speed="400"
                        data-tilt-perspective="500"
                    >
                        <Image
                            className="hero_img"
                            src="/IMG_9951-Recovered.png"
                            width={400}
                            height={522}
                            alt="vasilkoff"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
