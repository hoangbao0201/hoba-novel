import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Router } from "next/router";

import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
