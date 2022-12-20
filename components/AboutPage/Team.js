import Image from "next/image";

export default function Team() {
    return (
        <>
            <section className="about_team">
                <div className="heading">Meet our Team</div>
                <div className="line"></div>
                <div className="about_team_para">
                    Would you like to meet us in advance? There are three of us
                    in Cyprus.
                    <br />
                    <br />
                    The rest of the team are in Ukraine and Russia.
                </div>
                <div className="about_team_members ">
                    <div className="about_team_member">
                        <Image
                            src="/IMG_9913-Recovered-1537x2048.jpg"
                            width={353}
                            height={470}
                            alt="vasilkoff"
                        />
                        <div className="name">Anastasia Sarlidou</div>
                    </div>

                    <div className="about_team_member">
                        <Image
                            src="/aaa.png"
                            width={353}
                            height={470}
                            alt="vasilkoff"
                        />
                        <div className="name">Maxim Vasilkov</div>
                    </div>

                    <div className="about_team_member">
                        <Image
                            src="/IMG_9926-Recovered-1.png"
                            width={353}
                            height={470}
                            alt="vasilkoff"
                        />
                        <div className="name">Simon Papazov</div>
                    </div>
                </div>
            </section>
        </>
    );
}
