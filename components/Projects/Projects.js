import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <>
            <section id="projects">
                <div className="projects_heading heading reveal">
                    <h3>A piece of our Projects</h3>
                </div>
                <div className="project_list">
                    <a href="calculator-lock.html">
                        <div
                            className="project"
                            data-projectName="Calculator Lock"
                        >
                            <Image
                                src="/Group-1198-300x146.png"
                                width={394}
                                height={193}
                                alt="vasilkoff"
                            />
                        </div>
                    </a>

                    <a href="koko-mix-admin.html">
                        <div
                            className="project"
                            data-projectName="KOKO-MIX ADMIN"
                        >
                            <Image
                                src="/Screenshot-2020-09-25-at-3.26.37-PM-1024x508.png"
                                width={388}
                                height={193}
                                alt="vasilkoff"
                            />
                        </div>
                    </a>

                    <a href="smrtsgn-2.html">
                        <div className="project" data-projectName="SMRTSGN">
                            <Image
                                src="/Screenshot-2020-09-23-at-2.06.49-PM-1024x691.png"
                                width={357}
                                height={241}
                                alt="vasilkoff"
                            />
                        </div>
                    </a>

                    <a href="smrt16.html">
                        <div className="project" data-projectName="SMRT16">
                            <Image
                                src="/Screenshot-2020-09-25-at-3.19.07-PM-1024x501.png"
                                width={393}
                                height={193}
                                alt="vasilkoff"
                            />
                        </div>
                    </a>

                    <a href="votemee-app.html">
                        <div className="project" data-projectName="Voteme App">
                            <Image
                                src="/Screenshot-2020-09-22-at-12.59.53-PM-1024x525.png"
                                width={375}
                                height={193}
                                alt="vasilkoff"
                            />
                        </div>
                    </a>

                    <a href="spin-deals-app.html">
                        <div
                            className="project"
                            data-projectName="SPIN DEALS APP"
                        >
                            <Image
                                src="/Screenshot-2020-09-22-at-1.02.22-PM-1024x491.png"
                                width={375}
                                height={193}
                                alt="vasilkoff"
                            />
                        </div>
                    </a>

                    <a href="abetterflorist.html">
                        <div
                            className="project"
                            data-projectName="ABETTERFLORIST"
                        >
                            <Image
                                src="/Screenshot-2020-09-25-at-12.31.10-PM-1024x588.png"
                                width={357}
                                height={205}
                                alt="vasilkoff"
                            />
                        </div>
                    </a>

                    <a href="housekeeper-world.html">
                        <div
                            className="project"
                            data-projectName="Housekeeper World"
                        >
                            <Image
                                src="/Screenshot-2020-09-23-at-12.28.50-PM-1024x518.png"
                                width={381}
                                height={193}
                                alt="vasilkoff"
                            />
                        </div>
                    </a>

                    <a href="cbay-rent-a-car.html">
                        <div
                            className="project"
                            data-projectName="CBAY RENT A CAR"
                        >
                            <Image
                                src="/Screenshot-2020-09-25-at-12.37.15-PM-1024x620.png"
                                width={357}
                                height={216}
                                alt="vasilkoff"
                            />
                        </div>
                    </a>
                </div>

                <div className="project_btn reveal">
                    <Link href="/portfolio">Check Our Portfolio</Link>
                </div>
            </section>
        </>
    );
}
