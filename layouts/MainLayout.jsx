import Header from "../components/UI/Header";
import dynamic from "next/dynamic";
import { useState } from "react";

const Footer = dynamic(() => import("../components/UI/Footer"));
const LoginModal = dynamic(() => import("../components/UI/LoginModal"));

const MainLayout = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen w-full">
            <Header setOpenModal={setModalOpen.bind(null, true)} />
            {children}
            {modalOpen && <LoginModal closeModal={setModalOpen.bind(null, false)} />}
            <Footer />
        </div>
    );
}

export default MainLayout;
