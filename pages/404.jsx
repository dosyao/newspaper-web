import MainLayout from "../layouts/MainLayout";
import NotFoundComponent from "next/error";
import useDisplay from "../hooks/useDisplay";

const NotFound = () => {
    const { lg } = useDisplay();

    return (
        <MainLayout>
            <NotFoundComponent statusCode={404} />
        </MainLayout>
    );
};

export default NotFound;
