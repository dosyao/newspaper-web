import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import InformationComponent from '../components/InformationComponent';

const About = ({ source }) => <>
    <Head>
        <title>About Us | Newspaper</title>
    </Head>
    <InformationComponent source={source} />
</>;

export const getStaticProps = async ({ pathname = '' }) => {
    const source = (await import(`/public/data/info-pages/${pathname || 'about'}.js`))?.default;
    const mdxSource = await serialize(source.data);

    return {
        props: {
            source: mdxSource
        }
    }
}

export default About;
