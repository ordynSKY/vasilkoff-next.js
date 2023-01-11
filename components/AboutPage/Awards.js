import Image from "next/image";
import { useEffect } from "react";

export default function Awards() {
    useEffect(() => {
        var toggle = document.querySelector(".toggle");
        var menu = document.querySelector(".menubar");
        var menuItems = document.querySelectorAll("header .menubar ul li a");
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("activeMob");
            menu.classList.toggle("activeMenu");
        });

        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener("click", function () {
                var c = 0;
                while (c < menuItems.length) {
                    menuItems[c++].classList.remove("active");
                }
                menuItems[i].classList.add("active");
            });
        }
    });

    return (
        <>
            <section className="about_awards">
                <div className="heading ">Awards and Recognitions</div>
                <div className="about_awards_detail">
                    <div className="about_awards_detail_left reveal">
                        <div className="about_heading sub-head ">
                            BOC Hackathon #fintech 3.0
                        </div>
                        <div className="about_para sub-para ">
                            We are so happy that we won the 2nd place on fintech
                            Hackathon during the period 18 - 20 October in
                            Nicosia Cyprus😁🙈🥈! During these days, our mission
                            was to build an innovative application using APIs by
                            Bank of Cyprus. We are really thankful to the judges
                            for giving us the second place in this competition.
                        </div>
                    </div>

                    <div className="about_awards_detail_right reveal">
                        <div className="pics">
                            <Image
                                src="/IMG_7836_Original-1024x683.jpg"
                                width={1024}
                                height={683}
                                alt="vasilkoff"
                            />
                            <Image
                                src="/IMG_7688-1024x683.jpg"
                                width={1024}
                                height={683}
                                alt="vasilkoff"
                            />
                            <Image
                                src="/IMG_7542-1024x683.jpg"
                                width={1024}
                                height={683}
                                alt="vasilkoff"
                            />
                            <Image
                                src="/photo_2020-09-22-13.53.06-1024x730.jpeg"
                                width={1024}
                                height={683}
                                alt="vasilkoff"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
