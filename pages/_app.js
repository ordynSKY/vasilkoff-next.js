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
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
                <link
                    href="http://fonts.googleapis.com/css?family=Lato:400,700"
                    rel="stylesheet"
                    type="text/css"
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
