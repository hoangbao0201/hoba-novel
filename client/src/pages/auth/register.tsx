import Head from "next/head";
import { useRouter } from "next/router";

import FormRegister from "@/components/FormRegister";
import GlobalStyles from "@/components/GlobalStyles";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";

export interface LoginProps {}

const Login = () => {
    const router = useRouter();
    const newRouter = useBreadcrumbs(router);

    return (
        <>
            <Head>
                <title>{newRouter[newRouter.length - 1].title} - HoBa</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <GlobalStyles>
                    <FormRegister />
                </GlobalStyles>
            </main>
        </>
    );
};

export default Login;
