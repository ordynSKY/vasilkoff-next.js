import Image from "next/image";
import { useEffect } from "react";

export default function Cards() {
    useEffect(() => {
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var windowWidth = window.innerWidth;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 0.1;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);
    });

    return (
        <>
            <section id="services" className="help">
                <div className="heading reveal">What we can help you with</div>
                <div
                    className="cards_help"
                    data-tilt
                    data-tilt-reset="false"
                    data-tilt-max="2"
                    data-tilt-speed="200"
                    data-tilt-perspective="900"
                    data-tilt-reverse="true"
                >
                    <div
                        className="hcard hcard1"
                        data-tilt
                        data-tilt-startx="85"
                        data-tilt-starty="2"
                        data-tilt-reset="false"
                        data-tilt-max="2"
                        data-tilt-speed="200"
                        data-tilt-perspective="900"
                        data-tilt-reverse="true"
                    >
                        <div className="himg">
                            <Image
                                src="/b1p1.jpg"
                                width={223}
                                height={223}
                                alt="vasilkoff"
                            />
                        </div>
                        <div className="sub-head">
                            Web Application Development
                        </div>
                        <div className="sub-para">
                            Our web applications are marked by a robust,
                            scalable architecture that supports high performance
                            requirements and ease of management without
                            compromising.
                        </div>
                    </div>

                    <div
                        className="hcard hcard2"
                        data-tilt
                        data-tilt-startx="2"
                        data-tilt-starty="85"
                        data-tilt-reset="false"
                        data-tilt-max="2"
                        data-tilt-speed="200"
                        data-tilt-perspective="900"
                        data-tilt-reverse="true"
                    >
                        <div className="himg">
                            <Image
                                src="/b1p2.jpg"
                                width={223}
                                height={223}
                                alt="vasilkoff"
                            />
                        </div>
                        <div className="sub-head">
                            Mobile Application Development
                        </div>
                        <div className="sub-para">
                            We develop powerful applications that provide a
                            thrilling experience for your users and bring
                            tangible value to your business. Whether native,
                            cross platform or web.
                        </div>
                    </div>

                    <div
                        className="hcard hcard3"
                        data-tilt
                        data-tilt-startx="85"
                        data-tilt-starty="2"
                        data-tilt-reset="false"
                        data-tilt-max="2"
                        data-tilt-speed="200"
                        data-tilt-perspective="900"
                        data-tilt-reverse="true"
                    >
                        <div className="himg">
                            <Image
                                src="/b1p3.jpg"
                                width={223}
                                height={223}
                                alt="vasilkoff"
                            />
                        </div>
                        <div className="sub-head">Blockchain Apps Services</div>
                        <div className="sub-para">
                            We can assist you in developing cryptocurrency
                            exchanges based on the model of the Peatio
                            open-source exchange.
                        </div>
                    </div>

                    <div
                        className="hcard hcard4"
                        data-tilt
                        data-tilt-startx="2"
                        data-tilt-starty="85"
                        data-tilt-reset="false"
                        data-tilt-max="2"
                        data-tilt-speed="200"
                        data-tilt-perspective="900"
                        data-tilt-reverse="true"
                    >
                        <div className="himg">
                            <Image
                                src="/b1p4.jpg"
                                width={223}
                                height={223}
                                alt="vasilkoff"
                            />
                        </div>
                        <div className="sub-head">UX/UI Design Development</div>
                        <div className="sub-para">
                            Based on many years of experience and extensive
                            knowledge in the field of design, we are exploring
                            the full concept of the application, user
                            interaction, animation and visual design.
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="services" className="help">
                <div className="heading">What we can help you with</div>
                <div
                    className="cards_help"
                    data-tilt
                    data-tilt-reset="false"
                    data-tilt-max="2"
                    data-tilt-speed="200"
                    data-tilt-perspective="900"
                    data-tilt-reverse="true"
                >
                    <div
                        className="hcard hcard1"
                        data-tilt
                        data-tilt-startX="85"
                        data-tilt-startY="2"
                        data-tilt-reset="false"
                        data-tilt-max="2"
                        data-tilt-speed="200"
                        data-tilt-perspective="900"
                        data-tilt-reverse="true"
                    >
                        <div className="himg">
                            <Image
                                src="/b1p1.jpg"
                                width={223}
                                height={223}
                                alt="vasilkoff"
                            />
                        </div>
                        <div className="sub-head">
                            Web Application Development
                        </div>
                        <div className="sub-para">
                            Our web applications are marked by a robust,
                            scalable architecture that supports high performance
                            requirements and ease of management without
                            compromising.
                        </div>
                    </div>

                    <div
                        className="hcard hcard2"
                        data-tilt
                        data-tilt-startX="2"
                        data-tilt-startY="85"
                        data-tilt-reset="false"
                        data-tilt-max="2"
                        data-tilt-speed="200"
                        data-tilt-perspective="900"
                        data-tilt-reverse="true"
                    >
                        <div className="himg">
                            <Image
                                src="/b1p2.jpg"
                                width={223}
                                height={223}
                                alt="vasilkoff"
                            />
                        </div>
                        <div className="sub-head">
                            Mobile Application Development
                        </div>
                        <div className="sub-para">
                            We develop powerful applications that provide a
                            thrilling experience for your users and bring
                            tangible value to your business. Whether native,
                            cross platform or web.
                        </div>
                    </div>

                    <div
                        className="hcard hcard3"
                        data-tilt
                        data-tilt-startX="85"
                        data-tilt-startY="2"
                        data-tilt-reset="false"
                        data-tilt-max="2"
                        data-tilt-speed="200"
                        data-tilt-perspective="900"
                        data-tilt-reverse="true"
                    >
                        <div className="himg">
                            <Image
                                src="/b1p3.jpg"
                                width={223}
                                height={223}
                                alt="vasilkoff"
                            />
                        </div>
                        <div className="sub-head">Blockchain Apps Services</div>
                        <div className="sub-para">
                            We can assist you in developing cryptocurrency
                            exchanges based on the model of the Peatio
                            open-source exchange.
                        </div>
                    </div>

                    <div
                        className="hcard hcard4"
                        data-tilt
                        data-tilt-startX="2"
                        data-tilt-startY="85"
                        data-tilt-reset="false"
                        data-tilt-max="2"
                        data-tilt-speed="200"
                        data-tilt-perspective="900"
                        data-tilt-reverse="true"
                    >
                        <div className="himg">
                            <Image
                                src="/b1p4.jpg"
                                width={223}
                                height={223}
                                alt="vasilkoff"
                            />
                        </div>
                        <div className="sub-head">UX/UI Design Development</div>
                        <div className="sub-para">
                            Based on many years of experience and extensive
                            knowledge in the field of design, we are exploring
                            the full concept of the application, user
                            interaction, animation and visual design.
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}
