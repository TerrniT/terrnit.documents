import "../styles/globals.css";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Meta from "../components/meta";
import Footer from "../components/footer";
import Container from "../components/container";
import Navbar from "../components/navbar";
import Main from "../components/main";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return <div>404 error</div>;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Meta />
      <Navbar />
      <Main>
        <Container>
          <Component {...pageProps} />
          <Footer />
        </Container>
      </Main>
    </ThemeProvider>
  );
}

export default MyApp;
