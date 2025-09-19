import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "../styles/landing-page.module.css";
import LoginBtn from "../public/assets/svg/login.svg";
import big_logo from "../public/assets/images/big_logo_.png"
import logo_shadow from "../public/assets/images/big_logo_shadow.png"
import dhiu from "../public/assets/images/dhiu.png"
import HomeMenu from "../components/homeMenu";
import Toppers from "../components/toppers";
import Footer from "../components/footer";
import Coutdown from "../components/coutdown";
import { useRouter } from "next/router";
import Banner from "../components/banner";
import AboutUs from "../components/aboutUs"
import BellIcon from "../public/assets/svg/bell.svg";
import Notifications from "../components/notifications";

export default function LandingPage() {
        const useScroll = () => {
                const [scrollTop, setScrollTop] = useState(0); // default width, detect on server.

                const handleScroll = () => setScrollTop(window.scrollY);
                useEffect(() => {
                        handleScroll()
                        window.addEventListener('scroll', handleScroll);
                        return () => window.removeEventListener('scroll', handleScroll);
                }, [handleScroll]);
                return scrollTop;
        };
        const router = useRouter()

        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isNotificationOpen, setIsNotificationOpen] = useState(false);

        return (
                <div className="">
                        <Head>
                                <title>Sibaq-22</title>
                                <meta name="sibaq" content="  Darul Huda Sibaq is the national art fest of DHIU 
        and its UG colleges officially sanctioned and supported by DHIU and its coordination committee to help,
         promote and develop educational activities of concerned students. " />
                                <link rel="icon" href="/assets/images/logo.png" />
                        </Head>

                        <header className={styles.header}>
                                <div className={`${styles.navbar} ${ useScroll() > 300 ? styles.scrolled : ''} `}>
                                        <div className={styles.bars} onClick={setIsMenuOpen}>
                                                <div className={styles.bar}></div>
                                                <div className={styles.bar}></div>
                                                <div className={styles.bar}></div>
                                        </div>
                                        <div className={styles.right}>
                                                {/* <LoginBtn onClick={() => router.push('/auth/login')} className={`${styles.navBtn} ${styles.navLoginBtn}`} /> */}
                                                <BellIcon onClick={() => setIsNotificationOpen(!isNotificationOpen)} className={`${styles.navBtn} ${styles.navBellIcon}`} />
                                        </div>
                                        <div className={`${styles.notification_container} ${isNotificationOpen ? styles.showing : ''}`}>
                                                <Notifications />
                                        </div>
                                </div>
                                <div className={styles.biglogoDiv}>
                                        <Image className={styles.logo} src={big_logo} layout="responsive" alt="sibaq" ></Image>
                                </div>
                                <div className={styles.bottomImageDiv}>
                                        <Image className={styles.bottomImage} src={dhiu} layout="responsive" alt="sibaq"></Image>
                                </div>
                                <div className={styles.logoShadowDiv}>
                                        <Image className={styles.logoShadow} src={logo_shadow} layout="responsive" alt="sibaq"></Image>
                                </div>
                        </header>
                        <div className={isNotificationOpen ? styles.closeNotiTriggerer : ''} onClick={() => setIsNotificationOpen(false)}></div>


                        <HomeMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                        <AboutUs />
                        <Banner />
                        {/* <Toppers /> */}
                        <Coutdown />

                        <Footer />

                </div>
        );
}
