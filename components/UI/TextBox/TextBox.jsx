import { MDXRemote } from "next-mdx-remote";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Link from "./components/Link";
import Image from "./components/Image";

const components = {
    h1: (props) => <Heading jsxTag="h1" {...props} />,
    h2: (props) => <Heading jsxTag="h2" {...props} />,
    h3: (props) => <Heading jsxTag="h3" {...props} />,
    p: Text,
    a: Link,
    img: Image
};

const TextBox = ({ source }) => (
    <article className="m-0 p-0">
        <MDXRemote {...source} components={components} />
    </article>
);

export default TextBox;
