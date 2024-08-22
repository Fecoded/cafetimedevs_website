import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, useSSR } from "@nextui-org/react";
import { theme } from "../assets/theme";

export default function App({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR()
  return (
    isBrowser && (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
    )
  );
}
