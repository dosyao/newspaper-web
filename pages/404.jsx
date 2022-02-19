import MainLayout from "../layouts/MainLayout";
import NotFoundComponent from "next/error";
import useDisplay from "../hooks/useDisplay";

const NotFound = () => {
    const { lg } = useDisplay();
    const top = lg ? -78 : -64;
    const bottom = lg ? -112 : -264;

    return (
        <MainLayout>
            <div style={{ marginTop: top, marginBottom: bottom }}>
                <NotFoundComponent statusCode={404} />
            </div>
        </MainLayout>
    );
};

export default NotFound;
