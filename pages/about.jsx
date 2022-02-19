import { serialize } from "next-mdx-remote/serialize";
import InformationComponent from '../components/InformationComponent';

const About = ({ source }) => <InformationComponent source={source} />;

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
