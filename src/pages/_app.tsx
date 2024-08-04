import { AppProps } from "next/app";
import "../app/globals.css";

const SamsungApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default SamsungApp;
