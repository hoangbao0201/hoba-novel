import type { AppProps } from "next/app";
import { Router } from "next/router";

import "@/styles/globals.scss";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import axios from "axios";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import HandlePage from "@/services/HandlePage";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

// axios
axios.defaults.baseURL = "http://localhost:4000";

// ---

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HandlePage>
                    <Component {...pageProps} />
                </HandlePage>
            </PersistGate>
        </Provider>
    );
}
