import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="upper_part">
                    <div className="firstadd add">
                        <div className="firstadd_country">UK</div>
                        <div className="firstadd_add">
                            Vasilkoff Ltd Reg. 07976437 <br />
                            207 Regent Street, London W1B 3HH
                        </div>
                        <div className="firstadd_social">
                            <ul className="firstadd_social">
                                <li>
                                    <a
                                        href="https://web.facebook.com/vasilkoff.software"
                                        target="_blank"
                                    >
                                        <i className="fa-solid fa-square-phone"></i>
                                        +18882614460
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://web.facebook.com/vasilkoff.software"
                                        target="_blank"
                                    >
                                        <i className="fa-solid fa-square-phone"></i>
                                        +4442045772478
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:maxim@vasilkoff.com"
                                        target="_blank"
                                    >
                                        <i className="fa-solid fa-at"></i>
                                        maxim@vasilkoff.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://t.me/Vasilkoff"
                                        target="_blank"
                                    >
                                        <i className="fa-solid fa-paper-plane"></i>
                                        Vasilkoff
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="secondadd add">
                        <div className="firstadd_country">Cyprus</div>
                        <div className="firstadd_add">
                            Vasilkoff (CY) Ltd Reg. HE 344792
                            <br />
                            ATHINODOROU BUSINESS CENTER Office 402
                            <br />
                            Charalambou Mouskou & Grigori Afxentiou Office 20
                            <br />
                            Paphos 8010
                        </div>
                        <div className="firstadd_social">
                            <ul className="firstadd_social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fa-regular fa-address-card"></i>
                                        VAT #CY10344792Y TIC 12344792A
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://wa.link/drf9vm"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-square-whatsapp"></i>
                                        +35796253566
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+35799169229" target="_blank">
                                        <i className="fa-solid fa-square-phone"></i>
                                        <span>+35799169229</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:sp@vasilkoff.com"
                                        target="_blank"
                                    >
                                        <i className="fa-solid fa-at"></i>
                                        <span>sp@vasilkoff.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://g.page/Vasilkoff-com?share"
                                        target="_blank"
                                    >
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>
                                            Glastonos 12-14, 2nd Floor,
                                            Paphos&nbsp;8046
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="thirdCol">
                        <ul>
                            <li className="active">
                                <Link href="">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <a href="/#map">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_line"></div>
                <div className="footer_terms">
                    <ul className="terms">
                        <li>
                            <a href="terms-conditions.html">
                                Terms & Conditions&nbsp;
                            </a>
                        </li>
                        <li>
                            <a href="privacy-policy.html">Privacy & Policy</a>
                        </li>
                    </ul>

                    <ul className="social">
                        <li>
                            <a href="https://www.facebook.com/vasilkoff.software">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/vasilkoff/">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
