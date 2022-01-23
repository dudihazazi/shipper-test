import type { AppProps } from "next/app";

import Container from "@/components/Container";
import GlobalStyle from "@/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
