import useDisplay from "../../hooks/useDisplay";
import MainLayout from "../../layouts/MainLayout";
import TextBox from "../UI/TextBox";

const InformationComponent = ({ source }) => {
    const { lg } = useDisplay();

    return (
        <MainLayout isGray>
            <div className="pt-[1px]" style={{ minHeight: `calc(100vh - ${lg ? 190 : 328}px)` }}>
                <div className="p-5 mx-auto bg-white lg:shadow-xl max-w-xl w-full lg:my-20 rounded-xl lg:p-7">
                    <TextBox source={source} />
                </div>
            </div>
        </MainLayout>
    );
}

export default InformationComponent;
