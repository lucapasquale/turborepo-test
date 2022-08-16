import { SSRProvider } from "react-aria";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
