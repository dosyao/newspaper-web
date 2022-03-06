import { USER_TOKEN, JWT_SECRET } from "../../constants/common";
import jwt from "jsonwebtoken";
import AccountVacancies from "../../components/AccountVacancies/AccountVacancies";


const AccountVacanciesPage = ({ vacancies }) => <AccountVacancies vacancies={vacancies} />;

export const getServerSideProps = async ({ req }) => {
    const token = req.cookies[USER_TOKEN];
    const user = await jwt.decode(token, JWT_SECRET);

    if (user.type !== "company") {
        return {
            notFound: true
        }
    }

    const data = (await import("../../public/data/vacancies.json"))?.default;

    return {
        props: {
            vacancies: data?.vacancies
        }
    }
}

export default AccountVacanciesPage;