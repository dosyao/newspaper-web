import Head from "next/head";
import InformationComponent from "../components/InformationComponent";
import { getStaticProps as f } from "./about";

const Contact = ({ source }) => <>
    <Head>
        <title>Contact Us | Newspaper</title>
    </Head>
    <InformationComponent source={source} />
</>;

export const getStaticProps = f.bind(null, { pathname: "contact" });

export default Contact;
