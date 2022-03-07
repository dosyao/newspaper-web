import { USER_TOKEN, JWT_SECRET } from "../../constants/common";
import jwt from "jsonwebtoken";
import AccountVacancies from "../../components/AccountVacancies/AccountVacancies";
import { getAccountVacancies } from "../../api/account";


const AccountVacanciesPage = ({ vacancies }) => <AccountVacancies vacancies={vacancies} />;

export const getServerSideProps = async ({ req }) => {
    const token = req.cookies[USER_TOKEN];
    const user = await jwt.decode(token, JWT_SECRET);

    if (user.type !== "company") {
        return {
            notFound: true
        }
    }

    const vacancies = await getAccountVacancies(user.id);

    return {
        props: {
            vacancies: vacancies ?? null
        }
    }
}

export default AccountVacanciesPage;