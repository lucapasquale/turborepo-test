import { SSRProvider } from "react-aria";
import type { AppProps } from "next/app";

import { Header } from "../common/Header";
import { globalStyles } from "ui";

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <SSRProvider>
      <Header />

      <Component {...pageProps} />
    </SSRProvider>
  );
}
