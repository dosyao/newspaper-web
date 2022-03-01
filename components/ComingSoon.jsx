import Head from "next/head";
import MainLayout from "../layouts/MainLayout";

const ComingSoon = () => {
    return (
        <MainLayout>
            <div className="w-full flex justify-center items-center" style={{ minHeight: 'calc(100vh - 77px - 112px)' }}>
                <Head>
                    <title>This page is not available at the momment | Newspaper</title>
                </Head>
                <div className="p-5">
                    <h1 className="text-4xl lg:text-6xl font-black text-center">
                        Coming Soon...
                    </h1>
                </div>
            </div>
        </MainLayout>
    );
}

export default ComingSoon;
