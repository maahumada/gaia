import { Nunito } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Navbar";
import GlobalStyle from "@/lib/globalStyles";
import Footbar from "@/components/Footbar";
import Head from "next/head";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata = {
  title: "gaia",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=home" />
    </Head>
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="gaia" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
      </head>
      <body className={`${nunito}`} style={{ maxHeight: "100vh" }}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Navbar />
          <div style={{ height: "calc(100vh - 130px)", width: "100vw", overflowX: "hidden", overflowY: "auto", background: "#F6EDDC", zIndex: 0 }}>
            {children}
          </div>
          <Footbar />
        </StyledComponentsRegistry>
      </body>
    </html>
    </>
  );
}
