import { Nunito } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Navbar";
import GlobalStyle from "@/lib/globalStyles";
import Footbar from "@/components/Footbar";

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
    <html lang="en">
      <body className={`${nunito}`}>
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
  );
}
