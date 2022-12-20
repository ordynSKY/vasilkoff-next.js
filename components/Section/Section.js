import Image from "next/image";

export default function Section() {
    return (
        <>
            <section>
                <div className=" hero_section">
                    <div className="left_col  fade-up-header   ">
                        <div className="hero_heading">
                            Professional Software
                            <br /> Development Services
                        </div>
                        <div className="hero_para">
                            We are a technology company that understands
                            complexity of businesses, and with our technical
                            expertise, we help them transform and scale.
                        </div>
                        <div className="hero_btn">
                            <a href="#services">Learn More</a>
                        </div>
                    </div>

                    <div
                        className="right_col"
                        data-tilt
                        data-tilt-reverse="true"
                        data-tilt-max="3"
                        data-tilt-speed="400"
                        data-tilt-perspective="500"
                    >
                        <Image
                            className="hero_img"
                            src="/3255469-768x768.jpg"
                            width={525}
                            height={525}
                            alt="vasilkoff"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
