import "../styles/globals.scss";
import type { AppProps } from "next/app";

function Syntheit({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Syntheit;
