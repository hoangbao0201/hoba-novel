import Head from "next/head";
import { useRouter } from "next/router";

import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import GlobalStyles from "@/components/GlobalStyles";
import FormBookDetail from "@/components/FormBookDetail";

export interface BookDetailProps {}

const BookDetail = () => {
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
                    <FormBookDetail />
                </GlobalStyles>
            </main>
        </>
    );
};

export default BookDetail;
