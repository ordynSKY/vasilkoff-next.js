import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import DataProvider from "../components/Context/DataContext";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>vasilkoff</title>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <DataProvider>
                <Component {...pageProps} />
            </DataProvider>
            <Script src="/scripts/vanilla-tilt.js" />
            <Script src="/scripts/vanilatilt.js" />
        </>
    );
}

export default MyApp;
