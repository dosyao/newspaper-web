import MainLayout from "../layouts/MainLayout";
import NotFoundComponent from "next/error";

const NotFound = () => {
    return (
        <MainLayout>
            <NotFoundComponent statusCode={404} />
        </MainLayout>
    );
};

export default NotFound;
