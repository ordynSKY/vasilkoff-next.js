import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
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
            <header>
                <div className="logo">
                    <Link href="/">
                        <Image
                            src="/logo-vasilkoff.png"
                            width={115}
                            height={53}
                            alt="vasilkoff"
                        />
                    </Link>
                </div>
                <div className="toggle"></div>
                <div className="menubar">
                    <ul className="menu">
                        <li>
                            <Link href="/" className="active">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/#map">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
