import { SSRProvider } from "react-aria";
import type { AppProps } from "next/app";

import { Header } from "../components/header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Header />

      <Component {...pageProps} />
    </SSRProvider>
  );
}
