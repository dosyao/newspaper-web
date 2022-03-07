import { ChevronLeftIcon } from "@heroicons/react/solid";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { accountActions } from "../../constants/common";
import VacanciesList from "./VacanciesList";
import VacancyForm from "./VacancyForm";

const Footer = dynamic(() => import("../UI/Footer"));

const AccountVacancies = ({ vacancies }) => {
    const [action, setAction] = useState(accountActions.LIST);
    const [edit, setEdit] = useState(null);
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    }

    const renderPage = () => {
        switch (action) {
            case accountActions.LIST:
                return <VacanciesList vacancies={vacancies} setAction={setAction} setEdit={setEdit} />;
            case accountActions.ADD:
                return <VacancyForm />;
            case accountActions.EDIT:
                return <VacancyForm vacancy={edit} setEdit={setEdit} />;
            case accountActions.REVIEWS:
                return <div></div>;
            default:
                return null;
        }
    }

    return (
        <div className="min-h-screen w-full bg-white flex flex-col justify-between">
            <Head>
                <title>Account Vacancies | Newspaper</title>
            </Head>
            <div className="p-0 m-0 w-full">
                <header className="max-w-7xl w-full mx-auto p-5 flex items-center">
                    <ChevronLeftIcon
                        className="w-10 h-10 text-black hover:text-cyan-500 transition cursor-pointer"
                        onClick={handleGoBack}
                    />
                    <h1 className="lg:hidden text-center text-base font-black absolute left-[50%] translate-x-[-50%]">
                        VACANCIES    
                    </h1>
                </header>
                <h1 className="hidden lg:block text-center mt-12 mb-10 text-4xl font-black">
                    My Vacancies
                </h1>
                {renderPage()}
            </div>
            <Footer />
        </div>
    );
}

export default AccountVacancies;
