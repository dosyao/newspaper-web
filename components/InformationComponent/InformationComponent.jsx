import MainLayout from "../../layouts/MainLayout";
import TextBox from "../UI/TextBox";

const InformationComponent = ({ source }) => (
    <MainLayout isGray>
        <div className="p-5 mx-auto bg-white shadow-xl max-w-xl w-full lg:my-20 rounded-xl lg:p-7">
            <TextBox source={source} />
        </div>
    </MainLayout>
);

export default InformationComponent;
