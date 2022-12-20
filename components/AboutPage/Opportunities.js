import Image from "next/image";

export default function Opportunities() {
    return (
        <>
            <section className="about_oppor">
                <div className="heading ">Find opportunities right for you</div>
                <div className="about_oppor_detail reveal">
                    <div className="img">
                        <Image
                            src="/IMG_0097.jpg"
                            width={586}
                            height={391}
                            alt="vasilkoff"
                        />
                    </div>
                    <div className="deatil reveal">
                        <div className="sub_head">
                            Join the family and become a part of the cutting
                            edge crowd
                        </div>
                        <div className="para">
                            It ain’t easy explaining working at Vasilkoff. It’s
                            the ambitious, yet humble people. It’s the doer
                            culture. The heart. The attention to detail and
                            data. It’s a ride you might want to learn more
                            about.
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
